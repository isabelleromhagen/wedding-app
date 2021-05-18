import React, {useState} from "react";
import "../styling/App.css";
import Image from '../images/Brudparet.jpg';
import Tidsschema1 from '../images/Tidsschema1-1.png';
import {isMobileView} from "../utils/MobileView";


const Info = () => {
  return (
    <div className={isMobileView() ? "mobileContainer" : "desktopContainer"}>
      <h1 className={isMobileView() ? "mobileHeader" : "desktopHeader"}>
        Bröllopsdagen
      </h1>
      <img
        src={Image}
        alt="Brudparet"
        className={isMobileView() ? "imgMobile" : "imgDesktop"}
      />
      <h4 className={isMobileView() ? "mobileSubHeader" : "desktopSubHeader"}>
        Nedan följer information om vår bröllopsdag
      </h4>
      <br />
      <ul className={isMobileView() ? "mobileList" : "desktopList"}>

      <li>Klicka gärna runt på alla flikar för att ta del av all tillgänglig information</li>
      <li>Klädkoden: kostym för män & långklänning för kvinnor, vilket innebär att klänningen slutar nedanför knäna</li>
      <li>Vi önskar vår bröllopsdag barnfri, med undantag för ammande barn som inte kan lämnas till barnvakt</li>
      <li>Vill ni någon gåva ge, vill vi gärna världen se. Ett litet bidrag till vår bröllopsresa är det vi önskar mest, 
          men det viktigaste för oss är att DU blir vår gäst! Vi tar gärna emot bidrag via swish 
          eller be våra toastmadames om uppgifter för att sätta in på bankkonto</li>
      <li>Bröllopets hashtag är: #</li>
      <li>Önska gärna en låt du lovar att dansa till på dansgolvet när du anmäler dig under ”O.S.A”</li>
      <li>Har du några frågor eller funderingar är du välkommen att vända dig till våra toastmadames Malin, Augusta & Emmi: </li>
      </ul>
      <img src={Tidsschema1} style={{
        width:"55vw",
        marginLeft:"12vw",
        marginTop: "10vh",
        borderRadius: "8px"
      }}/> 
    </div>
  );
}

export default Info;
