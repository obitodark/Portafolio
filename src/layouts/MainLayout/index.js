import { Outlet } from 'react-router-dom';
import { ViewLateralMenu, ViewFooter } from '../../components';

const MainLayout = () => {
    return (
        <div>
            <ViewLateralMenu>
                <Outlet />
            </ViewLateralMenu>
            <ViewFooter />
        </div>
    );
};
export default MainLayout;
