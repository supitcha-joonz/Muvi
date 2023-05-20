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
import Moviepage from './containers/Administator/Home/AllMovie/Moviepage';
import Createcollection from './containers/Administator/Home/Collection/Createcollection';
import Editcollection from './containers/Administator/Home/Collection/Editcollection';
import Test from './containers/Test/test';
import Sidebar from './containers/Administator/Home/Sidebar';
import Actorpage from './containers/Administator/Home/AllActor/Actorpage';
import Collection from './containers/Administator/Home/Collection/Collection';





function App() {



  useEffect(() => {
    document.title = "MUVI";
  }, []);


  return (
    <div className="App" >
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Searchmain />} />
          <Route exact path="/searchresult/:key" element={<SearchResult />} />
          <Route exact path="/description/:id" element={<Description />} />
          <Route exact path="/actor/:id" element={<Actor />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createactor" element={<Createactor />} />
          <Route exact path="/createmovie" element={<Createmovie />} />
          <Route exact path="/editactor/:id" element={<Editactor />} />
          <Route exact path="/editmovie/:id" element={<Editmovie />} />
          <Route exact path="/adminhomepage" element={<Adminhome />} />
          <Route exact path="/allmovie" element={<Moviepage />} />
          <Route exact path="/allactor" element={<Actorpage />} />
          <Route exact path="/allcollection" element={<Collection />} />
          <Route exact path="/createcollection" element={<Createcollection />} />
          <Route exact path="/editcollection/:id" element={<Editcollection />} />
          <Route exact path="/sidebar" element={<Sidebar />} />
          {/* <Route exact path="/test" element={<Test />} /> */}
        </Routes>
      </BrowserRouter>


    </div>
  );
}



export default App;
