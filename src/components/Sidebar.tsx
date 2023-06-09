import { FC } from "react";

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>

            </ul>
        </div>
    );
}

export default Sidebar;