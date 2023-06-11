import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import ThemeSwitcher from "../components/ThemeSwitcher";

/*
 * CONTAINS AND MANAGES THE OVERALL LAYOUT OF APPLICATION.
 */

const SharedLayout = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <ThemeSwitcher />
        </main>
    );
}

export default SharedLayout;