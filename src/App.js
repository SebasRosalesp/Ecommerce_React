import React from "react";
import './App.css';
import Products from "./componentes/Products";
import Inicio from "./componentes/Inicio";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import LogginPage from "./componentes/LogginPage";

const App = () => {
  
  
  return(
      <Router>
            <Navbar closed={true}/>
            <Routes>
              <Route path="/" element={ <Inicio/> } />
              <Route path="Productos" element={ <Products/> } />
              <Route path="Inicio" element={<Inicio/>} />
              <Route path="Registro" element={<LogginPage/>} />
            </Routes>
            <Footer/>
    </Router>
  );
};

export default App;