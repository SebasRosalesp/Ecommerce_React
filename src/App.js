import React from "react";
import './App.css';
import Products from "./componentes/Products";
import Inicio from "./componentes/Inicio";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";


const App = () => {

  return(
    <Router>
            <Navbar/>
            <Routes>
              <Route path="/" element={ <Inicio/> } />
              <Route path="Productos" element={ <Products/> } />
              <Route path="Inicio" element={<Inicio/>} />
            </Routes>
            <Footer/>
    </Router>
  );
};

export default App;