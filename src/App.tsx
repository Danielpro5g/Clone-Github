import React from 'react';

//Routers of Navigation
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

//Import of GlobalStyles
import GlobalStyles from './GlobalStyles/Globalstyles';

//Import Of Components
import Header from './Components/Header';
import Footer from './Components/Footer';

//Imports of Pages
import Login from './Pages/Login';
import Profile from './Pages/Profile';
import Repo from './Pages/Repo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/:username" element={<Profile/>}></Route>
          <Route path="/:username/:reponame" element={<Repo/>}/>
        </Routes>
    <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
