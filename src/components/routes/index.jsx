import React from "react";
import { Routes as RouterRoutes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Skeels from "../../pages/Skeels";
import Project from "../../pages/Project";
// import Comments from "../../pages/Comments";
import Contact from "../../pages/Contact";

export default function Routes() {
  return (
    <div>
      <RouterRoutes>
        <Route path="/" element={<Home />} />
        <Route path="/skeels" element={<Skeels />} />
        <Route path="/project" element={<Project />} />
        {/* <Route path="/comments" element={<Comments />} /> */}
        <Route path="/contact" element={<Contact />} />
      </RouterRoutes>
    </div>
  );
}
