import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../layout/assets/logo.svg';

function Navbar() {
  return (
    <nav className="max-w-screen-xl w-full py-3 px-6 mb-12 mx-auto">
      <div className="mx-auto flex flex-col items-center md:flex-row">
        <div className="flex-none">
          <Link to="/">
            <Logo className="w-24 h-auto" />
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2 mt-5 md:mt-0">
          <div className="flex justify-end items-center">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/" className="navbar-item">
              Movies
            </Link>
            <Link to="/" className="navbar-item">
              Series
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
