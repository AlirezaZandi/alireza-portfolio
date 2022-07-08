import React from "react";
import ContactMe from "./pages/ContactMe";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Social from "./components/Social";
import Home from "./pages/Home";

import { Routes, Route } from "react-router-dom";

import "./app.scss";

function App() {
  return (
    <div className='app'>
      <div className='app-navbar'>
        <Navbar />
      </div>
      <div className='app-page container'>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Home />} />
          </Route>
          <Route path='skills' element={<Skills />} />
          <Route path='projects' element={<Projects />} />
          <Route path='contact' element={<ContactMe />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
