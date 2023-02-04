import { useContext } from 'react';

import { dataTable } from './configTable';

import TableConteiner from '../common/TableContainer';
import { ContextSkill } from '../../context/ContextSkill';
import useAlert from '../../hooks/useAlert';
import { deleteSkill } from '../../services/skills.services';
import useData from '../../hooks/useData';
import { ViewTable } from '../common/';
import useDataTable from '../../hooks/useDataTable';

const TableSkills = ({ openModal }) => {
    const { dataSkills, setDataSkill, isUpdateSkill, isCreateSkill } = useContext(ContextSkill);
    const [response, setDelete] = useData(deleteSkill);
    const [setAlert] = useAlert();

    // const cul = [
    //     {
    //         name: 'image',
    //         type: 'image',
    //         width: 150
    //     },
    //     {
    //         name: 'name',
    //         type: 'text',
    //         width: 150
    //     },
    //     {
    //         name: 'edit',
    //         type: 'button',
    //         button: {
    //             action: {}
    //         }
    //     }
    // ];
    // const [dataj, setDataj] = useDataTable();
    const handleEditProjects = async (id) => {
        // setData(cul);
        // console.log('data', data);
        await setDataSkill(id);
        isUpdateSkill();
        openModal();
    };

    const handleDeleteProjects = async (id) => {
        setAlert('Borrar skills', 'Skill is deleted', () => setDelete(id));

        // await setAlert('Borrar Projecto', 'se ha borrado el projecto', () => deleteProject(id));
    };

    const { rows, columns } = dataTable(dataSkills, handleDeleteProjects, handleEditProjects);
    return <ViewTable rows={rows} columns={columns} openModal={openModal} isAction={isCreateSkill} title={'Table Skills'} />;
};

export default TableSkills;
