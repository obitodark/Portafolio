import { useContext } from 'react';

import { dataTable } from './configTable';

import useAlert from '../../hooks/useAlert';

import { ViewTable } from '../common';
import { ContextCategories } from '../../context/ContextCategories';
import { deleteCategories } from '../../services/categories.services';
import useData from '../../hooks/useData';

const TableCategories = () => {
    // const { setDataProject, deleteProject, dataProjects, setAlert } = useContext(DataContext);
    const [res, setDelete] = useData(deleteCategories);
    const [setAlert] = useAlert();
    const { setDataCategory, dataCategories, openModalCategory, isCreateCategory, isUpdateCategory, closeModalCategory } =
        useContext(ContextCategories);
    const handleEditCategories = async (id) => {
        await setDataCategory(id);
        isUpdateCategory();
        openModalCategory();
    };
    const handleDeleteCategories = async (id) => {
        await setAlert('Borrar Categories', 'Categories is deleted', () => setDelete(id));
        
    };

    const { rows, columns } = dataTable(dataCategories, handleEditCategories, handleDeleteCategories);
    return <ViewTable rows={rows} columns={columns} openModal={openModalCategory} isAction={isCreateCategory} title={'Table Categories'} />;
};
export default TableCategories;
