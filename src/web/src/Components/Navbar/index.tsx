import { NavLink } from "react-router-dom";
import LoginButton from "../Login";
import LogoutButton from "../Logout";
import Profile from "../Profile";

const NavBar = () => {
    const activeStyle = "underline text-gray-500 underline-offset-4";

    return(
        <nav className="flex justify-between items-center fixed z-10 w-full y-5 px-8 text-md front-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to="/">Ivory-Orca</NavLink>
                </li>
                <li>
                    <NavLink to ="/" 
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        All
                     </NavLink>
                </li>
                <li>
                    <NavLink to="/My Account"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/My Order"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        My Order
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/My Orders"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Jerseys"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        Jerseys
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Clearance"
                        className={({isActive}) => (isActive ? activeStyle : undefined)}>
                        Clearance
                    </NavLink>
                </li>
            </ul>
            <div className="flex items-center gap-3">
                <li className="list-none">
                    <LoginButton/>
                </li>
                <li className="list-none">
                    <LogoutButton/>
                </li>
                <li className="list-none">
                    <Profile/>
                </li>
            </div>
            
        </nav>
    )
}

export default NavBar;