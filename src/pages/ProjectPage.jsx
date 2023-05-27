import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const params = useParams();
  const url = `http://localhost:8000/project/${params.id}`;
  const navigate = useNavigate()

// получает данные при каждом рендере страницы
  useEffect(() => {
    axios
      .get(url, {
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setProject(res.data.data));
  }, []);

//   удаляет запись в базе посылая DELETE запрос
  const handleDelete = () => {
    axios
    .delete(url, {
      headers: {
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    }).then(() => navigate('/'))
  }

  return (
    <div className=" px-[2vw] pt-[10vw]">
      <div className="text-start">
        <p className="text-[3vw] font-bold">{project.name}</p>
        <p className="text-[1.5vw] font-semibold">город {project.cityName}</p>
        <p className="text-[1.5vw] mt-[1vw] font-semibold">Цена: {project.price}</p>
        <div className="flex mt-5">
          {project.preview ? (
            <img
              className="mb-4 h-[30vw]"
              src={project.preview}
              alt={"preview"}
            />
          ) : (
            <div className="mb-4 w-[50%] h-[30vw] bg-slate-400" />
          )}
          <div className="ml-4">{project.description}</div>
        </div>
        <div className="flex justify-between mt-[2vw]">
          <Link to={`http://localhost:3000/${params.id}/edit`}>
            <button className="border border-black px-[2vw] py-[1vw] ">
              Редактировать
            </button>
          </Link>
          <button className="border border-black px-[2vw] py-[1vw]" onClick={() => handleDelete()}>
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
