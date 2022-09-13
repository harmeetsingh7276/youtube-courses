import logo from './logo.svg';
import React, { Component }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Header from './components/Header';
import {Button} from "reactstrap";

function App() {
  return (
    <div>
      <h1>BootStrap components</h1>
      <Button color='primary'>First React Button</Button>
    </div>
  );
}

export default App;
