import React from "react";
import { Redirect, Route, Switch } from "react-router";
import About from "./About";
import Errror from "./Errror";

import Wrap from "./Wrap";

const Search = () =>{
    return(
        <>
     <Switch>
         <Route exact path="/" >
             <Redirect to="/search"></Redirect>
         </Route>
         <Route exact path={['/search','/images','/news','/videos']}>
            <Wrap></Wrap>
         </Route>
         <Route exact path="/about" component={About}></Route>
         <Route  path="/" component={Errror}></Route>
     </Switch>
        </>
    )
}

export default Search;