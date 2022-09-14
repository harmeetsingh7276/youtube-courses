import React, { useState } from 'react';
import Course from './Course';

const AllCourses=()=>{

    const [courses,setCourses]=useState([
        {title:"Java",description:"Java Course"},
        {title:"Django",description:"Django Course"},
        {title:"ReactJs",description:"ReactJs Course"},
        {title:"Angular",description:"Angular Course"},
    ]);
    return(
        <div>
            <h1>All Courses</h1>
            <p>List of Courses</p>

            {
                courses.length>0
                ?courses.map((item)=> <Course course={item}/>)
                :"No Courses"
            }
        </div>
    );
};
export default AllCourses;