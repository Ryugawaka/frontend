import { Link, useLocation } from "react-router-dom";

const Header = () => {
   const location =  useLocation()
  return (
    <div className={`bg-cyan-800 h-20 w-full fixed flex justify-between px-[2vw] border-b border-gray-600 ${location.pathname === '/login' && 'hidden'}`}>
      <Link to="/">
        <div className="font-bold text-white text-center py-[1vw] text-2xl w-[20vw]">
          Строительная компания
        </div>
      </Link>
      <Link to="/login">
        <div className=" w-20 text-white text-center py-6 font-bold" onClick={() => localStorage.removeItem('token')}>
          Выйти
        </div>
      </Link>
    </div>
  );
};

export default Header;
