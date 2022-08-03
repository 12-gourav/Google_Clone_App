import React, { useEffect } from "react";
import { NavLink,Link } from "react-router-dom";
import ReactPlayer from 'react-player';
import { useResultContext } from "../contexts/ResultContextProvider";
import { useLocation } from "react-router";
import Loading from "./Loading";
import "../components/data.css";

const Result = () =>{
    const {results,isLoading,getResults,search,time,total1} = useResultContext();
    const location = useLocation();
useEffect(()=>{
    if(search)
    {
        if(location.pathname === '/videos')
        {
            getResults(`/search/q=${search} videos`);
        }
        else{
            getResults(`${location.pathname}/q=${search}&num=40`);
        }
    }

},[search,location.pathname])


    if(isLoading) return <Loading></Loading>;

    switch (location.pathname) {
        case '/search':
            return (
                <>  <p className="s">{`Your Search result is ${search}`}</p>
                <p className="s">{`About ${total1} results (${time}seconds) `}</p>
                {results?.map(({link,title,description},index)=>{
                    return(
                        <>
                      
                        <div key={index} className="ben">
                        <a href={link}>{link}</a>
                        <a href={link}><p className="linkh" >{title}</p>
                        <p className="dis">{description}</p></a>
                        </div>
                        
                        
                        </>
                    )
                })}
                </>
            );

    
            case '/images':
                return (
                    <>
                    <p className="s">{`Your Search result is ${search}`}</p>
                    <p className="s">{`About ${total1} results (${time}seconds) `}</p>
                    <div className="container ben1">  {results?.map(({image,link :{ href,title}},index)=>{
                        return(
                            <>
                            <div key={index}>
                           <a href={href} key={index}>
                               <img src={image?.src} alt={title}/>
                               <p>{title}</p>
                           </a>
                            </div>
                            
                            
                            </>
                        )
                    })}</div>
                  
                    </>
                ); 
                case '/news':
                    return (
                        <>
                            <p className="s">{`Your Search result is ${search}`}</p>
                    <p className="s">{`About ${total1} results (${time}seconds) `}</p>
                        {results?.map(({links,title,id,source})=>{
                            return(
                                <>
                                <div key={id} className="ben">
                                <a href={links?.[0].href}>
                                <p className="newst" >{title}</p> </a>
                               <div>
                                   <a href={source?.href} target="_blank">
                                       {source?.href}
                                   </a>
                               </div>
                                </div>
                                
                                
                                </>
                            )
                        })}
                        </>
                    );
                    case '/videos':
                        return (
                            <>
                                <p className="s">{`Your Search result is ${search}`}</p>
                    <p className="s">{`About ${total1} results (${time}seconds) `}</p>
                            <div className="container ben2">{results?.map(({title,link},index)=>{
                                return(
                                    <>
                                  <div key={index}>
                                  <a href={link}>  
                                       <p>{title}</p>
                                       <ReactPlayer url={link} controls className="player" width="100%" height="100%" />
                                   </a>
                                    </div>
                                    
                                    </>
                                )
                            })}</div>
                            </>
                        );
                 
                  
                     
        default:
            return 'Error';
    }





    
}

export default Result;