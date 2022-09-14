import React from "react";
import { ListGroup } from "reactstrap";
import {Link} from 'react-router-dom'

const Menus=()=>{
    return(
        <>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-courses" action>View Courses</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>About</Link>
            </ListGroup>
            <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="#!" action>Contact Us</Link>
            </ListGroup>
        </>
    )
}
export default Menus;