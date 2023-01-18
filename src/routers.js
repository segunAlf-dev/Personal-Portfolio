import React from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./url";
// import { ReactComponent as LoadingIcon } from "./Assets/svg/loading-icon.svg";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const About = React.lazy(() => import("./Pages/About/About"));
const Projects = React.lazy(() => import("./Pages/Projects/Projects"));
const Blog = React.lazy(() => import("./Pages/Blog/Blog"));

function Routers() {
  return (
    <div>
        <Routes>
          <Route path={NonAuthRoutes.home} element={<Home />} />
          <Route path={NonAuthRoutes.about} element={<About />} />
          <Route path={NonAuthRoutes.projects} element={<Projects />} />
          <Route path={NonAuthRoutes.blog} element={<Blog />} />
        </Routes>
    </div>
  );
}
export default Routers;
