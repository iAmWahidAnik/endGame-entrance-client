import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <div>header</div>
            <Outlet></Outlet>
            <div>footer</div>
        </>
    );
};

export default MainLayout;