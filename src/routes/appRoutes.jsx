import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Main from "../components/Main";

const AppRoutes = () => {

  return(
    <Routes>
      <Route path="/movil" element={<Main dataFilter={"movil"}/>} />
      <Route path="/frontend" element={<Main dataFilter={"frontend"}/>} />
      <Route path="/backend" element={<Main dataFilter={"backend"}/>} />
      <Route path="/fullstack" element={<Main dataFilter={"fullstack"}/>} />
      <Route path="/portafolio" element={<Home />} />
    </Routes>
  );
}

export default AppRoutes;
