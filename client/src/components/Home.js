import React from "react";
import "../styling/App.css";
import Image from "../images/inbjudan.png";
import Image2 from "../images/Brudparet2.jpg";
import { isMobileView } from "../utils/MobileView";

const Home  = () => {
    return (
      <div className={isMobileView() ? "mobileContainer" : "desktopContainer"}>
        <img
          src={Image}
          alt="Inbjudan"
          id="inbjudan"
          className={isMobileView() ? "imgMobile" : "imgDesktop"}
        />
        <p className={isMobileView() ? "mobileText" : "desktopText"}>
          Varmt välkommen!
          <br/> Hoppas ni ser fram emot vår bröllopsdag lika mycket
          som vi!
          <br /> Som vi har drömt, planerat och haft förväntningar inför denna
          dag. Vi är så glada att just du kommer för att förgylla vår dag.{" "}
          <br /> Den stora dagen kommer äga rum i krokarna runt Mullsjö. Vigseln
          sker i Bjurbäcks kyrka och efterföljande fest äger rum på Näs Gård.
          <br /> Vi hoppas att vår bröllopshemsida kommer innehålla allt du
          behöver veta inför vårt bröllop 14/8-2021. Det gäller att ni är
          förberedda, för det kommer bli en hejdundrande dag värd att minnas!
        </p>
        <img src={Image2} style={{width:"30vw", borderRadius:"8px", marginLeft:"25vw", marginRight:"auto"}}/>
      </div>
    );
}

export default Home;