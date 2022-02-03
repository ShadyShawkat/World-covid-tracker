import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useLocation } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="z-10 fixed top-0 w-screen py-3 px-6 text-center bg-blue-dark text-white tracking-widest shadow-xl">
      {location.pathname !== '/' && (
        <div className="absolute text-3xl hover:bg-blue-900 cursor-pointer left-0 top-0 h-full flex items-center pl-6 pr-2">
          <IoIosArrowBack
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
      )}

      <h1 className="text-2xl font-extrabold">Covid Tracker</h1>
    </nav>
  );
};

export default Nav;
