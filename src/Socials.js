import React, { useState } from "react";
import "./socials.css";

function Socials(){
    
    
    return(
        <div className = "Socials">
        <a href="https://www.tiktok.com/@jerardlouis/video/6875032236828216582?lang=en&is_copy_url=1&is_from_webapp=v2" target="_blank">
         <img class="tiktok" src="https://cdn4.iconfinder.com/data/icons/social-media-flat-7/64/Social-media_Tiktok-512.png"
           width="25"
           height="25"
         />
         </a >
          
        <a href="https://github.com/jerardlouis" target="_blank">
        <img class="github" src="https://cdn3.iconfinder.com/data/icons/ultimate-social/150/48_github-512.png"
            width="25"
            height="25"
        />
        </a >
          
        <a href="https://www.instagram.com/jerardlouis/?hl=en" target="_blank">
         <img class="instagram" src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Instagram-512.png"
           width="25"
           height="25"
        />
        </a>
        <a href="https://www.linkedin.com/in/jerard-louis-guevarra-514717139/" target="_blank">
         <img class="instagram" src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_six_gray-512.png"
           width="25"
           height="25"
        />
        </a >
        </div>
    );
}
export default Socials;