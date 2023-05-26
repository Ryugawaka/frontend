import React, { useState, useEffect } from "react";
import Card from "../ui/Card";
import axios from "axios";
import { Link } from "react-router-dom";

const project = "http://localhost:8000/project/filter";


const sort = async (text1) => {
  return await axios
    .post(project, {
      text: text1,
    })
    .then((res) => res.data.data);
};

const MainPage = () => {
  const [projects, setProjects] = useState([]);

  // получает данные карточек из запроса и записывает их в projects
  useEffect( () => {
     axios
      .post(project, {
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => res.data)
      .then((data) => setProjects(data.data));

  }, []);

  const filterProjects = (e) => {
    setTimeout(async () => {
      setProjects(await sort(e.target.value));
    }, 1000);
  };
  return (
    <div>
      <div className="flex justify-between pt-[10vw] px-[2vw]">
        <div>
          <p className="font-bold text-[1.5vw]">Поиск</p>
          <input
            className="border border-black outline-none rounded-md px-[0.4vw] py-[0.2vw] text-[1.5vw]"
            onInput={(e) => filterProjects(e)}
          />
        </div>
        <Link to="/add">
          <button className="border border-black px-[2vw] mt-[1vw] py-[1vw]">
            Добавить проект
          </button>
        </Link>
      </div>
      <div className="px-[4vw] pt-[2vw] pb-[10vw] flex gap-5 flex-wrap">
        {projects.map((p) => {
          return (
            <Link to={`/${p.id}`} key={p.id}>
              <Card
                city={p.cityName}
                title={p.name}
                image={p.preview}
                key={p.id}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default MainPage;
