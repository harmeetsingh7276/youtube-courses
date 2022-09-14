import React, { useState,useEffect } from 'react';
import Course from './Course';
import base_url from '../api/bootapi';
import axios from "axios"
import { toast } from 'react-toastify';

const AllCourses=()=>{
    useEffect(()=>{
        document.title="All Courses";
        getAllCoursesFromServer();
    },[]);


    //Call to server 
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
            (response)=>{
                //for success
                // console.log(response);
                console.log(response.data);
                toast.success("Courses Loaded.",{position:"bottom-center"});
                setCourses(response.data);
            },(error)=>{
                //for error
                console.log("ERROR");
                toast.error("Something went wrong.",{position:"bottom-center"});
            }
        )
    };
    const [courses,setCourses]=useState([]);
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses</p>

            {
                courses.length>0
                ?courses.map((item)=> <Course key={item.id} course={item}/>)
                :"No Courses"
            }
        </div>
    );
};
export default AllCourses;