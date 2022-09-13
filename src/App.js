import logo from './logo.svg';
import React, { Component }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Header from './components/Header';
import {Button} from "reactstrap";
import Home from './components/Home';
import Course from './components/Course';

function App() {
  const btnHandle=()=>{
    toast.error("This is my first toast",{
      position:"top-center"
    });
  };
  return (
    <div>
      <ToastContainer/>
      <Home/>
      <Course course={{title:"Java",description:"Java Course"}}/>
      <Course course={{title:"Django",description:"Django Course"}}/>
    </div>
  );
}

export default App;
