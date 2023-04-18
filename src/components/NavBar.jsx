import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
        <NavLink to="/" className={({isActive}) => (isActive ? 'mx-2 font-bold': 'mx-2')}> Contacts </NavLink>
        <NavLink to="/app" className={({isActive}) => (isActive ? 'mx-2 font-bold': 'mx-2')}> Appointments </NavLink>
    </nav>
  )
};

export default NavBar;
