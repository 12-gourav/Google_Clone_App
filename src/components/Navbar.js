import React, { useEffect, useState } from "react";
import "./Style.css";
import { useDebounce} from "use-debounce";
import { useResultContext } from "../contexts/ResultContextProvider";
import { NavLink } from "react-router-dom";



const Navbar = () => {

    const [text,setText] = useState('');
    const {setSearch} = useResultContext();
    const [debouncedValue] = useDebounce(text,300);

    useEffect(()=>{
        if(debouncedValue) setSearch(debouncedValue);
    },[debouncedValue]);

    return(
        <>
        <header>
            <h2>Google</h2>
            <div className="container">
                <div className="box">
                    <input type="text" value={text} onChange={(event)=>setText(event.target.value)}></input>
                    <button><i class="fas fa-microphone"></i></button>
                    <span>|</span>
                   
                    {text && (
 <button onClick={()=>setText('')}><i class="fas fa-sun"></i></button>
                    )}
                     {!text && (
 <button onClick={()=>setText('')}><i class="fas fa-search"></i></button>
                    )}
                   
                </div>
                
            </div>
        <div className="tom"><a href="">Gmail</a>  <a href="">Youtube</a> <NavLink to="/about">About</NavLink></div>
        </header>
        
        
        </>
    )
}

export default Navbar;