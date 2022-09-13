import React from "react";
import {Button,Container } from 'reactstrap';


const Home=()=>{
    return(
        <div className="text-center">
            
                <h1 className="display-3">Learning ReactJS</h1>
                <p>It's priting with the help of Jumbotron</p>
                <Container>
                    <Button outline color="primary">Start Using</Button>
                </Container>
        </div>
    )
}

export default Home;