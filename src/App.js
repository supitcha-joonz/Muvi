import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/Administator/Home/Home';
import Searchmain from './containers/SearchMain/Searchmain';
import Login from './containers/Administator/Login/Login';
import SearchResult from './containers/SearchResult/SearchResult';



function App() {
  useEffect(() => {
    document.title = "MUVI";
  }, []);


  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          
            <Route exact path="/" element={<Home />} />
            <Route exact path="/searchmain" element={<Searchmain />} />
            <Route exact path="/searchresult" element={<SearchResult />} />
            <Route exact path="/login" element={<Login />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
