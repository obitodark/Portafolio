import { useContext } from 'react';
import { ViewTableProjects, ViewActionProjects } from '../../../components';
import { ViewModal } from '../../../components/common';
import { ContextProjects } from '../../../context/contextProjects';

const Admin = () => {
    const { isOpenModalProjects, closeModalProjects } = useContext(ContextProjects);

    return (
        <div style={{ height: '100vh', display: 'flex', justifyContent: 'center' }}>
            <div>
                {/* <ViewContainerModal container={<ViewActionProjects />} title={'Edit Projects'} /> */}

                <ViewModal open={isOpenModalProjects} isClose={closeModalProjects} title={'Edit Projects'}>
                    <ViewActionProjects />
                </ViewModal>

                <ViewTableProjects />
            </div>
        </div>
    );
};

export default Admin;
