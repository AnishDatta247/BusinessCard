import React from "react";
import MyApp from "./Components/MyImage";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import "./index.css"

export default function App(){
    return(
        <div className="box">
            <MyApp />
            <Main />
            <Footer />
        </div>
    )
}