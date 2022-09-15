import logo from './logo.svg';
import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './App.css';
import Header from './components/Header';
import { Button, Col, Container, Row } from "reactstrap";
import Home from './components/Home';
import AllCourses from './components/Allcourses';
import AddCourse from './components/AddCourse';
import Menus from './components/Menus';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


function App() {
  const btnHandle = () => {
    toast.error("This is my first toast", {
      position: "top-center"
    });
  };
  return (
    <div>
      <Router>
        <ToastContainer />
        <Container>
          <Header />
          <Row>
            <Col md={4}>
              <Menus />
              
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home/>} exact />
                <Route path="/add-course" element={<AddCourse/>} exact />
                <Route path="/view-courses" element={<AllCourses/>} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
