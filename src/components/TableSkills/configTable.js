import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import { Button, Avatar } from '@mui/material';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';

export const dataTable = (dataSkills, handleDeleteProjects, handleEditProjects) => {
    const columns = [
        { field: '_id', headerName: 'ID', width: 150, editable: false },
        {
            field: 'url_image',
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
            editable: false
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
                    <Button onClick={async () => handleEditProjects(params.id)}>
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
                    <Button onClick={async () => await handleDeleteProjects(params.id)}>
                        {/* {console.log(params.id)} */}

                        <DeleteForeverIcon sx={{ color: 'red' }} />
                    </Button>
                );
            }
        }
    ];
    // const rows = dataProjects.map((data) => {
    //     data.imagen = data.images_projects[0].images.url_image;

    //     return data;
    // });
    let rows = dataSkills;

    return { columns, rows };
};
