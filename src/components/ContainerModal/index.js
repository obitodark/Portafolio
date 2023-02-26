import { Grid, Modal, Button, Divider, Typography, Box } from '@mui/material';

import { useContext } from 'react';

import { DataContext } from '../../context/DataProvider';
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    padding: '10px 20px 10px 20px',
    borderRadius: '10px'
};
const ContainerModal = ({ container, title }) => {
    const { openModal, setOpenModal, setIsUpdate, isUpdate } = useContext(DataContext);

    const handleCloseModal = () => {
        if (isUpdate) setIsUpdate(false);
        setOpenModal(false);
    };
    return (
        <Modal hideBackdrop open={openModal} sx={{ borderRadius: '10px' }}>
            <Box sx={{ ...style }}>
                <Grid container position={'relative'}>
                    <Grid xs={12} mb={2}>
                        <Typography variant="h5" color="initial">
                            {title}
                        </Typography>
                    </Grid>
                    <Grid xs={12}>{container}</Grid>
                    <Divider sx={{ color: 'black' }} />
                    <Box>
                        <Button variant="contained" sx={{ position: 'absolute', top: '0px', right: '0px' }} onClick={handleCloseModal}>
                            X
                        </Button>
                    </Box>
                </Grid>
            </Box>
        </Modal>
    );
};

export default ContainerModal;
