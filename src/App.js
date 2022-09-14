import logo from './logo.svg';
import React, { Component }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Header from './components/Header';
import {Button, Col, Container, Row} from "reactstrap";
import Home from './components/Home';
import AllCourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';

function App() {
  const btnHandle=()=>{
    toast.error("This is my first toast",{
      position:"top-center"
    });
  };
  return (
    <div>
      <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
          <Menus/>
          </Col>
          <Col md={8}>
          <Home/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
