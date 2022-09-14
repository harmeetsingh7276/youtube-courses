import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menus=()=>{
    return(
        <>
            <ListGroup>
                <ListGroupItem tag="a" href="#!" action>Home</ListGroupItem>
            </ListGroup>
            <ListGroup>
                <ListGroupItem tag="a" href="#!" action>Add Course</ListGroupItem>
            </ListGroup>
            <ListGroup>
                <ListGroupItem tag="a" href="#!" action>View Courses</ListGroupItem>
            </ListGroup>
            <ListGroup>
                <ListGroupItem tag="a" href="#!" action>About</ListGroupItem>
            </ListGroup>
            <ListGroup>
                <ListGroupItem tag="a" href="#!" action>Contact Us</ListGroupItem>
            </ListGroup>
        </>
    )
}
export default Menus;