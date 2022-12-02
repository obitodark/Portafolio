import { styled, useTheme } from '@mui/material/styles';

import {
    AppBar,
    Container,
    Toolbar,
    Box,
    Typography,
    CssBaseline,
    useScrollTrigger,
    Grid,
    Button,
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Drawer,
    IconButton,
    Link
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useContext } from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PropTypes from 'prop-types';
import ColorModeContext from '../../context/ColorModeContext';

const drawerWidth = 240;
export default function MenuLateral({ children, props, window }) {
    const theme = useTheme();
    const colorMode = useContext(ColorModeContext);
    let trigger = null;
    const navItems = ['Home', 'Skill', 'Projects', 'About'];
    function ElevationScroll(props) {
        const { children, window } = props;
        trigger = useScrollTrigger({
            disableHysteresis: true,
            threshold: 0,
            target: window ? window() : undefined
        });

        return React.cloneElement(children, {
            elevation: trigger ? 4 : 0
        });
    }

    ElevationScroll.propTypes = {
        children: PropTypes.element.isRequired,

        window: PropTypes.func
    };

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Willians Ccallo
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link href={`#${item}`} sx={{ textDecoration: 'none' }}>
                                {item}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;

    const handlemove = (e) => {
        e.scrollIntoView({
            behavior: 'smooth'
        });
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                    style={{
                        // backgroundColor: trigger ? "654EC4" : "#1416271A",
                        background: 'transparent',
                        backdropFilter: 'blur(15px)',
                        boxShadow: trigger ? '5px 0px 27px -5px rgba(0, 0, 0, 0.3) !important' : undefined
                    }}
                >
                    <Toolbar>
                        <IconButton
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Grid container justifyContent="space-between" alignContent="center">
                            <Grid item alignContent="center">
                                <Typography gutterBottom variant="h6" color={theme.palette.mode === 'dark' ? 'white' : 'black'} mt={1}>
                                    Willians Ccallo
                                </Typography>
                            </Grid>
                            <Grid iten sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {navItems.map((item, index) => (
                                    <Button
                                        key={index}
                                        sx={{ color: `${theme.palette.mode === 'dark' ? 'white' : 'black'}`, textTransform: 'capitalize' }}
                                    >
                                        <Link onClick={handlemove} href={`#${item}`} sx={{ textDecoration: 'none' }}>
                                            {item}
                                        </Link>
                                    </Button>
                                ))}
                            </Grid>
                            <Button sx={{ color: `${theme.palette.mode === 'dark' ? 'white' : 'black'}`, textTransform: 'capitalize' }}>
                                {theme.palette.mode} mode
                                <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
                                    {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                                </IconButton>
                            </Button>
                        </Grid>
                        <Box component="nav">
                            <Drawer
                                container={container}
                                variant="temporary"
                                open={mobileOpen}
                                onClose={handleDrawerToggle}
                                ModalProps={{
                                    keepMounted: true // Better open performance on mobile.
                                }}
                                sx={{
                                    display: { xs: 'block', sm: 'none' },
                                    '& .MuiDrawer-paper': {
                                        boxSizing: 'border-box',
                                        width: drawerWidth
                                    }
                                }}
                            >
                                {drawer}
                            </Drawer>
                        </Box>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Container maxWidth="xl">
                <Box sx={{ my: 2 }}>{children}</Box>
            </Container>
        </React.Fragment>
    );
}
