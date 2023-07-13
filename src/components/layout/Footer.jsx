import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="text-mainColor text-center text-4xl font-normal tracking-widest py-5 z-10 mt-10">
      <Link to="/" className="">
        XKP REALITY
      </Link>
    </div>
  );
}

export default Footer;
