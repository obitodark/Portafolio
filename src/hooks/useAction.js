import { useState } from 'react';

const useAction = (value = false) => {
    const [isAction, setIsAction] = useState(value);

    const isCreate = () => {
        setIsAction(true);
    };
    const isUpdate = () => {
        setIsAction(false);
    };

    return [isAction, isCreate, isUpdate];
};

export default useAction;
