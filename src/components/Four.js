import React from "react";
import {NavLink} from "react-router-dom";
import "./data.css";

const Four = () =>{
return(
    <>
    <div className=" toplink"> <NavLink className="lo" to="/search"exact activeClassName="active234"><i class="fas fa-globe-americas"></i> All</NavLink>
    <NavLink className="lo" to="/images"exact activeClassName="active234"><i class="far fa-images"></i> Images</NavLink>
    <NavLink className="lo" to="/news"exact activeClassName="active234"><i class="fas fa-newspaper"></i> News</NavLink>
    <NavLink className="lo" to="/videos"exact activeClassName="active234"> <i class="fab fa-youtube"></i> Videos</NavLink></div>
   
    </>
)
}

export default Four;