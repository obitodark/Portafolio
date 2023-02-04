import { useState } from 'react';

const useFieldsInput = () => {
    const [get, set] = useState({});
    const setInput = (e) => {
        const { name, value } = e.target;
        console.log(get);
        set({
            ...get,
            [name]: value
        });
        return;
    };

    return [get, set, setInput];
};
export default useFieldsInput;
