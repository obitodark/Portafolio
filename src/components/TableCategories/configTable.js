import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Button } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export const dataTable = (dataSkills, handleEditCategories, handleDeleteCategories) => {
    const columns = [
        {
            field: '_id',
            headerName: 'ID',
            width: 250,
            editable: false
        },
        {
            field: 'name',
            headerName: 'name',

            width: 150,
            editable: false
        },
        {
            field: 'clck',
            headerName: 'Edit',
            editable: false,
            width: 80,
            renderCell: (params) => {
                return (
                    <Button onClick={async () => handleEditCategories(params.id)}>
                        <ModeEditOutlineIcon sx={{ color: '#FFD866' }} />
                    </Button>
                );
            }
        },
        {
            field: '__',
            headerName: 'Delete',
            editable: false,
            width: 80,

            renderCell: (params) => {
                return (
                    <Button onClick={async () => await handleDeleteCategories(params.id)}>
                        <DeleteForeverIcon sx={{ color: 'red' }} />
                    </Button>
                );
            }
        }
    ];

    let rows = dataSkills;

    return { columns, rows };
};
