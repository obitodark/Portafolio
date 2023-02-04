import { useState } from 'react';

const useInputFile = (get, set) => {
    const [image, setImage] = useState(null);
    const onchange = (e) => {
        const { name } = e.target;
        set({ ...get, [name]: e.target.files[0] });

        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return [image, onchange];
};

export default useInputFile;
