import { useContext } from 'react';
import { ViewTableSkills, ViewSkillsForm } from '../../../components';
import { ViewModal } from '../../../components/common';
import { ContextSkill } from '../../../context/ContextSkill';
import useModal from '../../../hooks/useModal';

const Admin = () => {
    const { isActionSkill } = useContext(ContextSkill);

    const [isOpenModal, openModal, closeModal] = useModal();
    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
            <div>
                <ViewModal open={isOpenModal} isClose={closeModal} title={isActionSkill ? 'Create Skills' : 'Edit Skill'}>
                    <ViewSkillsForm isActionSkill={isActionSkill} />
                </ViewModal>

                <ViewTableSkills openModal={openModal} />
            </div>
        </div>
    );
};

export default Admin;
