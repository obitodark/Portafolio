import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import avatar from '../../Images/avatar.png';

import PersonIcon from '@mui/icons-material/Person';
import CodeIcon from '@mui/icons-material/Code';
import CategoryIcon from '@mui/icons-material/Category';
import FolderCopyIcon from '@mui/icons-material/FolderCopy';
import CircularProgress from '@mui/material/CircularProgress';
import {
    Box,
    Drawer,
    CssBaseline,
    Toolbar,
    List,
    Typography,
    IconButton,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Avatar,
    Grid,
    Button,
    Backdrop
} from '@mui/material';
import './css.css';

import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProjects } from '../../context/contextProjects';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    backgroundColor: '#121212',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0
    })
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
}));

export default function MenuAdmin({ children }) {
    const { isBackDrop } = useContext(ContextProjects);
    const history = useNavigate();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const arrayIcon = [
        <PersonIcon color="primary" />,
        <CodeIcon color="primary" />,
        <FolderCopyIcon color="primary" />,
        <CategoryIcon color="primary" />
    ];
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const handleExit = () => {
        localStorage.removeItem('token');
        return history('/');
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.modal + 1 }} open={isBackDrop}>
                <CircularProgress color="inherit" />
            </Backdrop>
            <CssBaseline />
            <AppBar position="fixed" open={open} sx={{ border: 'none', boxShadow: 'none', background: '#1E1E1E' }}>
                <Toolbar>
                    <IconButton onClick={handleDrawerOpen} edge="start" sx={{ mr: 2, ...(open && { display: 'none' }), color: 'white' }}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div" color={'white'}>
                        Dashboard Admin
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,

                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box'
                    }
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader sx={{ border: 'none', background: '#1E1E1E' }}>
                    <Typography variant="h6" color="#A1A1A1" mr={2}>
                        Willians Ccallo
                    </Typography>
                    <IconButton onClick={handleDrawerClose} sx={{ color: '#A1A1A1' }}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Box sx={{ background: '#1E1E1E', height: '100vh', color: '#A1A1A1' }}>
                    <Grid container>
                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Avatar
                                src={avatar}
                                background={'primary'}
                                sx={{ width: 90, height: 90, border: '3px solid primary ', background: 'white' }}
                            />
                        </Grid>

                        <Grid item xs={12} display={'flex'} justifyContent={'center'}>
                            <Typography variant="h6">Admin</Typography>
                        </Grid>
                    </Grid>
                    <List>
                        {['Users', 'Projects', 'Skill', 'Categories'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton sx={{ fontSize: '5px' }} onClick={() => history(`/panel-admin/${text}`)}>
                                    <ListItemIcon>{arrayIcon[index]}</ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Box display={'flex'} justifyContent={'center'}>
                        <Button onClick={handleExit} variant="contained" sx={{ width: '200px', padding: '5px' }}>
                            Exit
                        </Button>
                    </Box>
                </Box>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
        </Box>
    );
}
