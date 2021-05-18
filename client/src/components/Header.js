import React from 'react';
import { isMobileView } from "../utils/MobileView";
import Image from "../images/nyHeader.jpg"

const Header = () => {
    return(
  
            <img src={Image} className={isMobileView() ? "waterMobile" : "waterDesktop"}/>
       
    );
}

export default Header;