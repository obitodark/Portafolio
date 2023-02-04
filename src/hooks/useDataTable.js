import { Avatar, Button } from '@mui/material';

const useDataTable = () => {
    const [columns, setColumns] = useDataTable([]);
    const table = {};
    const validateType = (type, data) => {
        switch (type) {
            case 'image':
                return (params) => <Avatar variant="rounded" sx={{ width: 56, height: 56, padding: '7px' }} src={params.value} />;

            case 'text':
                return null;

            case 'button':
                return (params) => {
                    return <Button onClick={() => data.button.action(params.id)}>{data.button.icon}</Button>;
                };

            default:
                return null;
        }
    };

    const setTable = (datas) => {
        datas.map((data) =>
            table.push({
                field: data.name,
                headerName: data.name,
                headerAlign: 'center',
                align: 'center',
                editable: false,
                width: data.width,
                renderCell: validateType(data.type, data)
            })
        );
    };

    return [table, setTable];
};

export default useDataTable;
