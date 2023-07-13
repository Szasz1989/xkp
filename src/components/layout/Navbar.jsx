import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../layout/assets/logo.svg';

function Navbar() {
  return (
    <nav className="max-w-screen-xl w-full py-3 px-6 mb-12 mx-auto z-10">
      <div className="mx-auto flex flex-col items-center md:flex-row">
        <div className="flex-none">
          <NavLink activeclassname="active" to="/">
            <Logo className="w-32 h-auto" />
          </NavLink>
        </div>

        <div className="flex-1 px-2 mx-2 mt-5 md:mt-0">
          <div className="flex justify-end items-center">
            <NavLink activeclassname="active" to="/" className="navbar-item">
              Home
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/movies"
              className="navbar-item"
            >
              Movies
            </NavLink>
            <NavLink
              activeclassname="active"
              to="/series"
              className="navbar-item"
            >
              Series
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
