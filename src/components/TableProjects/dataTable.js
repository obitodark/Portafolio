import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Button, Avatar } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export const dataTable = (dataProjects, handleEditProjects, handleDeleteProjects) => {
    const columns = [
        { field: '_id', headerName: 'ID', width: 150, editable: false },
        {
            field: 'imagen',
            headerName: 'Image',
            headerAlign: 'center',
            align: 'center',
            // headerClassName: 'super-app-theme--header',
            width: 150,
            editable: false,
            renderCell: (params) => <Avatar variant="rounded" sx={{ width: 56, height: 56, padding: '7px' }} src={params.value} /> // renderCell will render the component
        },
        {
            field: 'name',
            headerName: 'name',

            width: 150,
            editable: false,
            renderCell: null
        },
        {
            field: 'description',
            headerName: 'decriptions',

            width: 350,
            editable: false
        },
        {
            field: 'clck',
            headerName: 'Edit',
            editable: false,
            width: 80,
            renderCell: (params) => {
                return (
                    <Button onClick={() => handleEditProjects(params.id)}>
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
            // headerClassName: 'super-app-theme--header',
            renderCell: (params) => {
                return (
                    <Button onClick={() => handleDeleteProjects(params.id)}>
                        <DeleteForeverIcon sx={{ color: 'red' }} />
                    </Button>
                );
            }
        }
    ];
    const rows =
        dataProjects.items !== undefined &&
        dataProjects.items.length > 0 &&
        dataProjects.items.map((data) => {
            data.imagen = data.images_projects[0].images.url_image;

            return data;
        });

    // console.log('datos de rows', rows);

    return { columns, rows };
};
