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
import Createactor from './containers/Administator/Home/AllActor/Createactor';
import Createmovie from './containers/Administator/Home/AllMovie/Createmovie';
import Adminhome from './containers/Administator/Home/Adminhome';
import Editactor from './containers/Administator/Home/AllActor/Editactor';
import Editmovie from './containers/Administator/Home/AllMovie/Editmovie';
import Sidebar from './containers/Administator/Home/Sidebar/Sidebar';
import Moviepage from './containers/Administator/Home/AllMovie/Moviepage';
import Createcollection from './containers/Administator/Home/Collection/Createcollection';
import Editcollection from './containers/Administator/Home/Collection/Editcollection';




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
            <Route exact path="/allmovie" element={<Moviepage />} />
            <Route exact path="/createcollection" element={<Createcollection />} />
            <Route exact path="/editcollection" element={<Editcollection />} />
            {/* <Route exact path="/sidebar" element={<Sidebar />} /> */}
          </Routes>
      </BrowserRouter>

      
    </div>
  );
}



export default App;
