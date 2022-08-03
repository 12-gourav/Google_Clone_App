import React from "react";
import Loader from 'react-loader-spinner';
import "./Style.css";

const Loading = () => {
return(
    <section className="loading">
        <Loader type="Puff" color="#00BFFF" height={550} width={80}></Loader>
    </section>
)
}

export default Loading;