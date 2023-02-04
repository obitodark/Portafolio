import { Box, Typography, Button } from '@mui/material';
import { GridToolbarContainer, GridToolbarExport, GridToolbarColumnsButton, GridToolbarFilterButton } from '@mui/x-data-grid';

import AddIcon from '@mui/icons-material/Add';
export const EditToolbar = ({ openModal, isAction, title }) => {
    const handleOpenModal = () => {
        isAction();
        openModal();
    };
    return (
        <GridToolbarContainer>
            <Box sx={{ display: 'flex', padding: '10px' }}>
                <Typography variant="h5"> {title}</Typography>
                <GridToolbarExport sx={{ margin: '0 15px' }} printOptions={{ disableToolbarButton: true }} />
                <GridToolbarColumnsButton />
                <GridToolbarFilterButton />
                <Button variant="outlined" size="small" onClick={handleOpenModal} sx={{ margin: '0 15px' }}>
                    <AddIcon fontSize="small" />
                </Button>
            </Box>
        </GridToolbarContainer>
    );
};
