import React, { Fragment, useEffect, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";

const AddCourse = () => {
    useEffect(() => {
        document.title = "Add Course";
    }, [])
    const [course, setCourse] = useState({});

    //form handler function
    const handleForm = (e) => {
        console.log(course);
        postDataToServer(course);
        e.preventDefault();
    };


    //function to post data on server
    const postDataToServer=(data)=>{
        axios.post(`${base_url}/courses`,data).then(
            (response)=>{
                console.log(response);
                console.log("success");
            },(error)=>{
                console.log(error);
                console.log("error");
            }
        )
    };


    return (
        <Fragment>
            <h1>Fill Course Details</h1>
            <Form onSubmit={handleForm}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter here" name="userId" id="userId" onChange={(e) => {
                        setCourse({ ...course, id: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course Title</label>
                    <Input type="text" placeholder="Enter title here" name="title" id="title" onChange={(e) => {
                        setCourse({ ...course, title: e.target.value })
                    }} />
                </FormGroup>
                <FormGroup>
                    <label for="description">Course Description</label>
                    <Input type="textarea" placeholder="Enter description here" name="description" id="description" style={{ height: 120 }} onChange={(e) => {
                        setCourse({ ...course, description: e.target.value })
                    }} />
                </FormGroup>
                <Container className="text-center">
                    <Button color="success" type="submit">Add Course</Button>
                    <Button color="warning">Clear</Button>
                </Container>
            </Form>
        </Fragment>
    )
}

export default AddCourse;