import React from "react";
import twitter from "./twitter.png"
import facebook from "./facebook.png"
import instagram from "./instagrey.png"
import github from "./github.png"

export default function Footer(){
    return(
        <footer>
            <div className="footer">
                <img src={twitter}/>
                <img src={facebook}/>
                <img src={instagram}/>
                <img src={github}/>
            </div>
            
        </footer>
    )
}