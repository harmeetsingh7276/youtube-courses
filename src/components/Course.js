import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import { Card, CardBody, CardTitle, CardSubtitle, CardFooter, Button, Container, CardText } from "reactstrap";
import base_url from "../api/bootapi";

const Course = ({ course, update }) => {

    const deleteCourse = (id) => {
        axios.delete(`${base_url}/courses/${id}`).then(
            (response) => {
                toast.success("Course Deleted", { position: "bottom-center" });
                update(id);
            },
            (error) => {
                toast.error("Something went wrong", { position: "bottom-center" })
            }
        )
    };

    const getCourseFromId = (id) => {
        
    };

    return (
        <Card className="text-center">
            <CardBody>
                <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-center">
                    <Button className="mx-1" color="danger" onClick={() => {
                        deleteCourse(course.id);
                    }}>Delete</Button>
                   
                    <Button className="mx-1" color="warning">Update</Button>
                    
                    <Button className="mx-1" color="primary" onClick={getCourseFromId(course.id)}>View</Button>
            </Container>
        </CardBody>
        </Card >
    )
}

export default Course;