import { Navigate, Outlet } from 'react-router-dom';

import { ViewMenuAdmin } from '../../components';
import { isAuthUser } from '../../services/auth.services';

const AdminLayout = () => {
    const isAuthenticated = isAuthUser();

    if (!isAuthenticated) {
        return <Navigate to="/" />;
    }

    return (
        <div>
            <ViewMenuAdmin>
                <Outlet />
            </ViewMenuAdmin>
        </div>
    );
};

export default AdminLayout;
