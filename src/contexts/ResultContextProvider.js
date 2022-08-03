import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = "https://google-search3.p.rapidapi.com/api/v1";

export const ResultContextProvider = ({children}) =>{
const [results,setResults] = useState([]);
const [isLoading,setIsLoading] = useState(false);
const [search,setSearch] = useState('');
const [time,setTime] = useState('');
const [total1,setTotal] = useState('');

const getResults = async (type) => {
setIsLoading(true);

const response = await fetch(`${baseUrl}${type}`,{
    method:'GET',
    headers:{
        'x-user-agent': 'desktop',
        'x-proxy-location': 'US',
        'x-rapidapi-host': 'google-search3.p.rapidapi.com',
    'x-rapidapi-key': 'd5f212e674mshe1ce3adf472c930p1bfce1jsnae0d2e12404b'
    }
});

const data = await response.json();

setTime(data.ts);
setTotal(data.total);
if(type.includes('/news'))
{
  setResults(data.entries);
}
else if(type.includes('/images'))
{
  setResults(data.image_results);
 
}
else{
  setResults(data.results);
}




setIsLoading(false);

}

return(
  <ResultContext.Provider value={{getResults,results,search,setSearch,isLoading,time,total1}}>
{children}
  </ResultContext.Provider>
)

}
export const useResultContext = () => useContext(ResultContext);