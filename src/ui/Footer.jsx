import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  return (
    <div
      className={`w-full h-[20vw] px-[2vw] py-[2vw] flex justify-between bg-cyan-800 ${
        location.pathname === "/login" && "hidden"
      }`}
    >
      <div className="flex flex-col">
        <p className="text-[3vw] mb-[3vw] text-start text-white font-bold">
          Транс-Регион-Логистика
        </p>
        <p className="text-[2vw] mb-[3vw] text-white">
          Перевозки по всей России и странам СНГ
        </p>
        <p className="text-[0.9vw] text-white text-start">
          Адрес: г.Москва ул.Вавилова 1/4 офис 56
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="text-[2vw] mb-[1vw] text-white font-bold">
          Номер телефона
        </p>
        <p className="text-[2vw] text-white">+7 999 000 00 99</p>
        <p className="text-[0.9vw] text-white">
          Звонок бесплатный по всей России
        </p>
      </div>
    </div>
  );
};
export default Footer;
