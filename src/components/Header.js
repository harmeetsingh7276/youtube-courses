import React from "react";
function Header(props) {
    return(
        <div style={{background:'yellow',padding:20}}>
            <h1>{props.name}</h1>
            <p>{props.title}</p>
        </div>
    );
}
export default Header;