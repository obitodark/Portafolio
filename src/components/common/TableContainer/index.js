import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { EditToolbar } from '../EditToolBar';

export const styleTable = {
    width: '100%',
    background: '#1E1E1E',
    color: '#E4DFD9',
    boxShadow: 2,
    border: 1,

    borderColor: '#383637',
    borderRadius: '5px',
    '& .MuiDataGrid-cell:hover': {
        color: 'yellow'
    },
    '& .MuiDataGrid-footerContainer': {
        border: 'none',
        outline: 0,
        color: 'white'

        // color: theme.palette.text.primary,
    },
    // '&  .MuiDataGrid-row' .Mui-selected': {
    //     background: 'yellow'
    // },
    // '& .MuiIconButton-label': {
    //     color: 'white'
    // },

    '& .MuiDataGrid-row': {
        // padding: '10px 0px'
        // margin: '10px'
        height: '70px',
        textAlign: 'center',
        marginLeft: '10px'
    },
    '& .MuiDataGrid-row:hover': {
        background: '#2C2C2C'
    },
    '& .MuiDataGrid-column': {
        border: '1px solid red'
    },
    // '& .super-app-theme--header': {
    //     backgroundColor: '#141414',
    //     borderColor: '#F8C03E',
    //     color: 'white'
    // },
    '& .MuiDataGrid-columnHeaders': {
        border: 'none',
        background: '#141414',
        color: 'white'
    },
    '& .MuiDataGrid-columnSeparator': {
        visibility: 'hidden'
    },
    '& .MuiDataGrid-cell': {
        // color: '#F8C03E',
        borderColor: '#383637',
        padding: '10px 0px'
    },
    '& .MuiDataGrid-columnHeader:': {
        // color: '#F8C03E',
        backgroundColor: 'white',
        borderColor: '#383637'
    }
    // '& .paxton-table--row': {
    //     border: 'none',
    //     borderRadius: '5px',
    //     marginBottom: '10px',
    //     backgroundColor: 'white'
    // }
};
const TableConteiner = ({ rows, columns, openModal, isAction, title }) => {
    return (
        <Box sx={{ width: 1000 }}>
            <DataGrid
                sx={{ ...styleTable }}
                rows={rows}
                columns={columns}
                rowHeight={60}
                pageSize={5}
                rowsPerPageOptions={[5]}
                autoHeight={true}
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                getRowId={(rows) => rows._id}
                components={{
                    Toolbar: EditToolbar
                }}
                componentsProps={{
                    toolbar: { openModal, isAction, title }
                }}
            />
        </Box>
    );
};

export default TableConteiner;
