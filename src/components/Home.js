import React,{useEffect} from "react";
import {Button,Container } from 'reactstrap';


const Home=()=>{
    useEffect(()=>{
        document.title="Home";
    },[])
    return(
        <div className="text-center">
            
                <h1>Learning ReactJS</h1>
                <p>It's priting with the help of Jumbotron</p>
                <Container>
                    <Button outline color="primary">Start Using</Button>
                </Container>
        </div>
    )
}

export default Home;