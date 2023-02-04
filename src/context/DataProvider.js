import { useEffect } from 'react';
import { createContext, useState } from 'react';
import Swal from 'sweetalert2';
import useAction from '../hooks/useAction';
import useData from '../hooks/useData';
import { createPivotImage } from '../services/image.pivot.services';
import { createImage, updateImage } from '../services/images.services';
import { createProjects, getProjects, getByIdProjects, deleteProjects, updateProjects } from '../services/projects.services';
import { getSkillById, getSkills } from '../services/skills.services';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    // const [dataProjects, setDataProjects] = useState([]);
    // const [openModal, setOpenModal] = useState(false);
    // const [dataProject, setDataProject] = useState([]);
    // const [isUpdate, setIsUpdate] = useState(false);
    // const [backDropOpen, setBackDropOpen] = useState(false);
    // const [refresh, setRefresh] = useState(false);
    // const [dataSkills, setDataSkills] = useState([]);
    // const [idProject, setIdProject] = useState(null);

    // const [datakill, setDataSkill] = useData(getSkillById);
    // const [dataProject, setDataProject] = useData(getByIdProjects);

    // const [res_create, createProy] = useData(createProjects);
    // const setAlert = async (title, subtitle, action) => {
    //     return Swal.fire({
    //         title: `${title}`,
    //         text: 'Esta accion no podra ser revertido',
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             await action();
    //             Swal.fire('Deleted!', `${subtitle}`, 'success');
    //             setRefresh(!refresh);
    //             setOpenModal(false);
    //         }
    //     });
    // };

    // const getDataSkills = async () => {
    //     const response = await getSkills();
    //     setDataSkills(response);
    // };
    // const deleteProject = async (id) => {
    //     const response = await deleteProjects(id);

    //     console.log('response', response);
    //     setRefresh(!refresh);
    // };

    // const getDataProject = async (id) => {
    //     const response = await getByIdProjects(id);
    //     await setDataProject(response);
    //     setIsUpdate(true);
    //     // setOpenModal(true);
    //     console.log('response', response);
    // };

    // const getDataProjects = async () => {
    //     const response = await getProjects();
    //     await setDataProjects(response);
    //     console.log('response_createprojects', res_create);
    // };

    // const createProject = async (images, dataProjects) => {
    //     setBackDropOpen(true);
    //     const response = await createProjects(dataProjects);
    //     // await createProy(dataProjects);

    //     const projects_code = await response._id;
    //     console.log('id_project_cereado ', res_create);
    //     // await Promise.all(
    //     // await images.map(async (image) => {
    //     for (const image of images) {
    //         const { _id } = await createImage(image.file);
    //         console.log('id_project_cereado2 ', res_create);
    //         await createPivotImage({ projects_code, image_code: _id });
    //     }

    //     // })
    //     // );
    //     setBackDropOpen(false);

    //     setRefresh(!refresh);
    //     setOpenModal(false);
    // };

    // const updateProject = async (id, images, dataProjects) => {
    //     setBackDropOpen(true);
    //     const response = await updateProjects(id, dataProjects);
    //     const projects_code = response._id;
    //     await Promise.all(
    //         images.map(async (image) => {
    //             if (image.file !== undefined) {
    //                 if (image.id !== undefined) {
    //                     console.log('file image', image.file);
    //                     await updateImage(image.id, image.file);
    //                 } else {
    //                     const { _id } = await createImage(image.file);
    //                     await createPivotImage({ projects_code, image_code: _id });
    //                 }
    //             }
    //         })
    //     );
    //     setBackDropOpen(false);
    //     setRefresh(!refresh);
    //     setOpenModal(false);
    // };

    // useEffect(() => {
    //     getDataProjects();
    // }, [refresh]);

    // useEffect(() => {
    //     getDataSkills();
    // }, [refresh]);
    return (
        <DataContext.Provider
            value={
                {
                    // dataProjects,
                    // openModal,
                    // setOpenModal,
                    // createProject,
                    // // getDataProject,
                    // dataProject,
                    // setDataProject,
                    // deleteProject,
                    // isUpdate,
                    // setIsUpdate,
                    // updateProject,
                    // backDropOpen,
                    // setAlert,
                    // dataSkills,
                    // datakill,
                    // setDataSkill
                }
            }
        >
            {children}
        </DataContext.Provider>
    );
};
export default DataProvider;
