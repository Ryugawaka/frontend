import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const registerPath = "http://localhost:8000/user/sign_up";
const login = "http://localhost:8000/user/sign_in";

const LoginPage = () => {
  const [isRegister, setIsRegister] = useState(false);
  const { handleSubmit, register } = useForm();
  const navigate = useNavigate();

//   собирает данные с инпутов и отправляет одним запросом в зависимости от выбранной формы
  const handleRegister = async (data) => {
    return await axios
      .post(isRegister ? login : registerPath, data)
      .then((res) => localStorage.setItem("token", res.headers.authorization))
      .then(() => navigate("/"));
  };

  return (
    <div className="bg-gray-400 w-full h-[100vw] pt-[15vw]">
      <form
        className={`mx-auto w-[35vw] h-[28vw] border boder-black flex flex-col bg-white px-[2vw] py-[1vw] 
        `}
        onSubmit={handleSubmit(handleRegister)}
      >
        <p className="font-bold text-[2vw]">
          {isRegister ? "Авторизация" : "Регистрация"}
        </p>
        <p className="text-[1vw] mt-[2vw]">Email</p>
        <input
          className="mt-[1vw] outline-none border border-black mx-auto"
          {...register("email")}
        />
        <p className="text-[1vw] mt-[2vw]">Пароль</p>
        <input
          className="mt-[1vw] outline-none border border-black mx-auto"
          type="password"
          {...register("password")}
        />
        <button
          type="subbmit"
          className="px-2 py-1 border border-black mx-auto mt-[2vw]"
        >
          Отправить
        </button>
        <button
          type="button"
          className="text-blue-600 self-end"
          onClick={() => setIsRegister(!isRegister)}
        >
          {isRegister ? "Регистрация" : "Войти"}
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
