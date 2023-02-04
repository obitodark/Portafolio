import { useContext } from 'react';

import { dataTable } from './dataTable';

import { ContextProjects } from '../../context/contextProjects';
import useAlert from '../../hooks/useAlert';
import useData from '../../hooks/useData';
import { deleteProjects } from '../../services/projects.services';
import { ViewTable } from '../common';

const TableProjects = () => {
    // const { setDataProject, deleteProject, dataProjects, setAlert } = useContext(DataContext);
    const [res, setDelete] = useData(deleteProjects);
    const [setAlert] = useAlert();
    const { setProject, dataProjects, openModalProjects, isCreateProject, isUpdateProjects } = useContext(ContextProjects);
    const handleEditProjects = async (id) => {
        await setProject(id);
        openModalProjects();
        isUpdateProjects();
    };
    const handleDeleteProjects = async (id) => {
        setAlert('Borrar project', 'projects is deleted', () => setDelete(id));
    };

    const { rows, columns } = dataTable(dataProjects, handleEditProjects, handleDeleteProjects);
    return <ViewTable rows={rows} columns={columns} openModal={openModalProjects} isAction={isCreateProject} title={'Table Projects'} />;
};
export default TableProjects;
