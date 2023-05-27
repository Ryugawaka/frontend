import "./App.css";
import { useEffect } from "react";
import Header from "./ui/Header";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import ProjectPage from "./pages/ProjectPage";
import EditProject from "./pages/EditProject";
import CreateProject from "./pages/CreateProject";
import Footer from "./ui/Footer";

function App() {
  const navigate = useNavigate();

  // проверяет наличие токена, если его нет, редиректит на логин
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, localStorage.getItem("token"));
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:id" element={<ProjectPage />} />
        <Route path="/:id/edit" element={<EditProject />} />
        <Route path="/add" element={<CreateProject />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
