import { useEffect } from 'react';
import { createContext } from 'react';
import useAction from '../hooks/useAction';
import useData from '../hooks/useData';
import useModal from '../hooks/useModal';
import { getSkills, getSkillById } from '../services/skills.services';

export const ContextSkill = createContext();

const DataProviderSkill = ({ children }) => {
    const [dataSkill, setDataSkill] = useData(getSkillById);
    const [dataSkills, setDataSkills] = useData(getSkills);
    const [isActionSkill, isCreateSkill, isUpdateSkill] = useAction();
    // const [isOpenModal, openModal, closeModal] = useModal;
    useEffect(() => {
        setDataSkills();
    }, []);
    return (
        <ContextSkill.Provider
            value={{
                dataSkill,
                setDataSkill,
                dataSkills,
                isActionSkill,
                isCreateSkill,
                isUpdateSkill
                // isOpenModal,
                // openModal,
                // closeModal
            }}
        >
            {children}
        </ContextSkill.Provider>
    );
};

export default DataProviderSkill;
