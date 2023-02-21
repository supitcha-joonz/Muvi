import logo from './logo.svg';
import './App.css';
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './containers/Administator/Home/Home';
import Searchmain from './containers/SearchMain/Searchmain';
import Login from './containers/Administator/Login/Login';
import SearchResult from './containers/SearchResult/SearchResult';
import Description from './containers/Description/Description';
import Actor from './containers/Actor/Actor';
import Createactor from './containers/Administator/CreateActor/Createactor';
import Createmovie from './containers/Administator/CreateMovie/Createmovie';
import Adminhome from './containers/Administator/Home/Adminhome';
import Editactor from './containers/Administator/EditActor/Editactor';
import Editmovie from './containers/Administator/EditMovie/Editmovie';




function App() {
  useEffect(() => {
    document.title = "MUVI";
  }, []);


  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          
            <Route exact path="/" element={<Searchmain />} />
            <Route exact path="/searchresult" element={<SearchResult />} />
            <Route exact path="/description" element={<Description />} />
            <Route exact path="/actor" element={<Actor />} />
            <Route exact path="/createactor" element={<Createactor />} />
            <Route exact path="/createmovie" element={<Createmovie />} />
            <Route exact path="/editactor" element={<Editactor />} />
            <Route exact path="/editmovie" element={<Editmovie />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/adminhomepage" element={<Adminhome />} />
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
