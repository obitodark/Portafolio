import { useContext } from 'react';
import { ViewCategoriesForm, ViewTableCategories } from '../../../components';
import { ViewModal } from '../../../components/common';
import { ContextCategories } from '../../../context/ContextCategories';



const Admin = () => {
    const { isActionCategory, isModalCategory, closeModalCategory } = useContext(ContextCategories);

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
            <div>
                <ViewModal open={isModalCategory} isClose={closeModalCategory} title={isActionCategory ? 'Create Skills' : 'Edit Skill'}>
                    <ViewCategoriesForm isActionSkill={isActionCategory} />
                </ViewModal>

                <ViewTableCategories />
            </div>
        </div>
    );
};

export default Admin;
