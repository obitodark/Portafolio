import { Container, Box } from '@mui/material';
import { Grid, Link, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
const Footer = () => {
    const pages = ['Home', 'About', 'Skill', 'Projects', 'Contact'];

    const Icons = [
        <FacebookIcon sx={{ color: '#DEDEDE ' }} />,
        <WhatsAppIcon sx={{ color: '#DEDEDE ' }} />,
        <GitHubIcon sx={{ color: '#DEDEDE ' }} />,
        <EmailIcon sx={{ color: '#DEDEDE ' }} />
    ];
    return (
        <footer>
            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }} mt={10} sx={{ background: '#000000' }}>
                <Container>
                    <Grid container spacing={5} justifyContent="center" alignItems="center">
                        <Grid item container xs={12} sm={3} alignItems="center">
                            <Grid item>{/* <img src={logo} alt="" width="60px" /> */}</Grid>
                            <Grid item>
                                {' '}
                                <Typography variant="h5" sx={{ fontWeight: 600 }} color="#EEEEEE">
                                    Willians Ccallo
                                </Typography>
                                <Typography variant="h5" sx={{ fontWeight: 600 }} color="#EEEEEE">
                                    Desarrollador Full Stack
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} sm={3}>
                            {Icons.map((icon, index) => (
                                <Grid item xs={3} key={index}>
                                    <Link href="/" color="#DEDEDE">
                                        {icon}
                                    </Link>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={3}>
                            <Box borderBottom={1} color="#BFBFBF" mb={2}>
                                <Typography variant="h5" color="white" p={1}>
                                    Pages
                                </Typography>
                            </Box>

                            {pages.map((page, index) => (
                                <Box key={index}>
                                    <Link href="/" color="#BFBFBF" sx={{ textDecoration: 'none' }}>
                                        {page}
                                    </Link>
                                </Box>
                            ))}
                        </Grid>
                    </Grid>
                    <Box textAlign="center" pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }} color="#EEEEEE">
                        Portafolio &reg; {new Date().getFullYear()}
                    </Box>
                </Container>
            </Box>
        </footer>
    );
};

export default Footer;
