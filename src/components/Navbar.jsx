import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="flex justify-center m-6">
      <NavLink className="mr-10" to="/">
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
    </div>
  );
};

export default Navbar;
