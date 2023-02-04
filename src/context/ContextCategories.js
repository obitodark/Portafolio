import { useEffect } from 'react';
import { createContext } from 'react';
import useAction from '../hooks/useAction';

import useData from '../hooks/useData';
import useModal from '../hooks/useModal';
import { getCategories, getByIdCategory } from '../services/categories.services';

export const ContextCategories = createContext();

const DataProviderCategories = ({ children }) => {
    const [isModalCategory, openModalCategory, closeModalCategory] = useModal();
    const [isActionCategory, isCreateCategory, isUpdateCategory] = useAction();
    const [dataCategories, setDataCategories] = useData(getCategories);
    const [dataCategory, setDataCategory] = useData(getByIdCategory);

    useEffect(() => {
        setDataCategories();
    }, [isModalCategory]);
    return (
        <ContextCategories.Provider
            value={{
                dataCategories,
                dataCategory,
                setDataCategory,
                isModalCategory,
                openModalCategory,
                closeModalCategory,
                isActionCategory,
                isCreateCategory,
                isUpdateCategory
            }}
        >
            {children}
        </ContextCategories.Provider>
    );
};

export default DataProviderCategories;
