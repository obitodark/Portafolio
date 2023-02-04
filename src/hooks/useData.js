import { useState } from 'react';

const useData = (action) => {
    const [data, setdata] = useState([]);

    const setData = async (id, data, filter) => {
        if (id && data && filter) {
            const response = await action(id, data, filter);
            setdata(response);
            // console.log('id :', id);
            return;
            // console.log(' is update');
        } else if (id && data) {
            const response = await action(id, data);
            setdata(response);
            // console.log('id :', id);
            return;
            // console.log(' is getbyid or deleted');
        } else if (id) {
            const response = await action(id);
            setdata(response);
            // console.log('id :', id);
            return;
            // console.log(' is getbyid or deleted');
        } else {
            const response = await action();
            setdata(response);
            // console.log('id :', id);

            return;
            // console.log(' is create o listar');
        }
    };

    return [data, setData];
};

export default useData;
