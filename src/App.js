import logo from './logo.svg';
import './App.css';
import UserForm from '../src/components/userform';
import CardList from '../src/containers/cardList';
import Header from '../src/components/header';
import CollegeList from '../src/containers/collegeList'
import {useEffect, useState} from 'react';
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div>
         <BrowserRouter>
         <div>
           <Header />
         </div>

           <Routes>
        
               <Route path="/userform" element={<UserForm/>} />
               <Route path="/userlist" element={<CardList/>} />
               <Route path="/colleges" element={<CollegeList/>} />

               <Route path={"*"} element={<Navigate replace to="/userform" />} />
               
           </Routes>
         </BrowserRouter>
       </div>
     
    </div>
  );
}

export default App;
