import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLayout from '../layouts/AdminLayout';
import MainLayout from '../layouts/MainLayout';
import { PageAdminProjects, PageAdminSkills, PageCategories } from '../Pages/Admin';
import { PageInicio, PageLogin } from '../Pages/Public';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path="/" element={<PageInicio />} />
                    {/* <Route index path="projects" element={<Admin />} /> */}
                </Route>
                <Route>
                    <Route path="/singIn" element={<PageLogin />} />
                    {/* <Route index path="/projects" element={<Admin />} /> */}
                </Route>
                <Route path="/panel-admin" element={<AdminLayout />}>
                    <Route path="Skill" element={<PageAdminSkills />} />
                    <Route path="Projects" element={<PageAdminProjects />} />
                    <Route path="Categories" element={<PageCategories />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default Router;
