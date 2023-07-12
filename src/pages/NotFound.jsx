import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="h-auto">
      <div className="text-center">
        <div className="max-w-screen-xl">
          <h1 className="text-7xl font-bold mb-8 md:text-8xl">Ooops!</h1>
          <p className="text-3xl mb-14 md:text-5xl">404 - Page not found!</p>
          <Link
            to="/"
            className="px-6 py-3 flex w-fit m-auto items-center bg-mainColor rounded "
          >
            <FaHome className="mr-2" />
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
