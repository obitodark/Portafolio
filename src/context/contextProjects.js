import { createContext, useEffect } from 'react';
import useAction from '../hooks/useAction';
import useData from '../hooks/useData';
import useModal from '../hooks/useModal';
import { createPivotImage } from '../services/image.pivot.services';
import { createImage, updateImage } from '../services/images.services';
import { getByIdProjects, getProjects, createProjects, updateProjects } from '../services/projects.services';

export const ContextProjects = createContext();

export const DataProviderProjects = ({ children }) => {
    const [dataProjects, setProjects] = useData(getProjects);
    const [dataProject, setProject] = useData(getByIdProjects);
    const [isActionProject, isCreateProject, isUpdateProjects] = useAction();
    const [isOpenModalProjects, openModalProjects, closeModalProjects] = useModal();
    const [isBackDrop, openBackDrop, closeBackDrop] = useAction();
    const [dataProjectsByPage, setProjectsByPage] = useData(getProjects);
   
   
    const createProject = async (images, dataProjects) => {
        openBackDrop();
        const response = await createProjects(dataProjects);
        const projects_code = await response._id;
        for (const image of images) {
            const { _id } = await createImage(image.file);
            await createPivotImage({ projects_code, image_code: _id });
        }
        closeBackDrop();
        closeModalProjects();
    };

    const updateProject = async (id, images, dataProjects) => {
        openBackDrop();
        const response = await updateProjects(id, dataProjects);
        const projects_code = response._id;
        await Promise.all(
            images.map(async (image) => {
                if (image.file !== undefined) {
                    if (image.id !== undefined) {
                        console.log('file image', image.file);
                        await updateImage(image.id, image.file);
                    } else {
                        const { _id } = await createImage(image.file);
                        await createPivotImage({ projects_code, image_code: _id });
                    }
                }
            })
        );
        closeBackDrop();
        closeModalProjects();
    };

    useEffect(() => {
        setProjects();
    }, [isOpenModalProjects]);
    useEffect(() => {
        setProjectsByPage(1, 8);
    }, [isOpenModalProjects]);
    return (
        <ContextProjects.Provider
            value={{
                dataProject,
                dataProjects,
                setProject,
                isActionProject,
                isCreateProject,
                isUpdateProjects,
                isOpenModalProjects,
                openModalProjects,
                closeModalProjects,
                createProject,
                isBackDrop,
                updateProject,
                dataProjectsByPage,
                setProjectsByPage
            }}
        >
            {children}
        </ContextProjects.Provider>
    );
};
