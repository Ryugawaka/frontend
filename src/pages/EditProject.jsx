import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const urlUpdate = "http://localhost:8000/project"

const EditProject = () => {
  const { handleSubmit, register } = useForm();
  const params = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(undefined);
  const urlGet = `http://localhost:8000/project/${params.id}`;

// получает данные при каждом рендере страницы
  useEffect(() => {
    axios
      .get(urlGet, {
        headers: {
          accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => setProject(res.data.data));
  }, []);

//   собирает данные с формы и отпралет в PUT запрос
  const handleEdit = async (data) => {
        const formData = new FormData();
        const obj = {};
        Object.keys(data).forEach((key) => {
          if (key !== "preview") obj[key] = data[key];
        });
        obj['id'] = params.id;
        formData.append("project", JSON.stringify(obj));
        data.preview[0] !== undefined && formData.append("preview", new Blob([data.preview[0]], {type : File}), data.preview[0].name)
    
        return await axios.put(urlUpdate, formData).then(() => navigate("/"));
      };


  return project && (
    <div className="py-[10vw] px-[3vw]">
         <p className="font-bold text-[2vw]">Редактировать проект</p>
      <form className="w-[30vw]" onSubmit={handleSubmit(handleEdit)}>
        <div className="flex mb-[2vw]  justify-between">
            <p className="mr-[2vw]">Название</p>
            <input className="border border-black outline-none" {...register('name')} defaultValue={project.name}/>
        </div>  
           <div className="flex mb-[2vw] justify-between">
            <p className="mr-[2vw]">Город</p>
            <input className="border border-black outline-none" {...register('cityName')} defaultValue={project.cityName}/>
        </div> 
          <div className="flex mb-[2vw] justify-between">
            <p className="mr-[2vw]">Цена</p>
            <input type='number' className="border border-black outline-none" {...register('price')} defaultValue={project.price}/>
        </div> 
        <div className="flex mb-[2vw] justify-between">
            <p className="mr-[2vw]">Превью</p>
            <input type='file' className="border border-black outline-none" {...register('preview')} multiple={false}/>
        </div> 
        <div className="flex mb-[2vw] justify-between">
            <p className="mr-[2vw]">Описание</p>
            <textarea className="border border-black outline-none" {...register('description')} defaultValue={project.description}/>
        </div>
        <button type='submit' className="border border-black px-[2vw] py-[1vw]">Отправить</button>
      </form>
    </div>
  );
};
export default EditProject;
