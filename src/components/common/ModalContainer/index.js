import { Modal, Grid, Box, Typography, Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};
const ModalContainer = ({ children, open, isClose, title }) => {
    return (
        <Modal open={open}>
            <Box sx={{ ...style }}>
                <Grid container>
                    <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'space-between' }} mb={2}>
                        <Typography variant="h5">{title}</Typography>
                        <Button variant="text" onClick={isClose}>
                            X
                        </Button>
                    </Grid>
                    <Grid xs={12} item>
                        {children}
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    );
};
export default ModalContainer;
