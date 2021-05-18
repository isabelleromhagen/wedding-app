import React from "react";
import Map from "./Map";
import "../styling/Map.css";
import { isMobileView } from "../utils/MobileView";

const location = {
  address: "Bjurbäcks kyrka 565 92 Mullsjö",
  lat: 57.860516,
  lng: 13.794224,
};

const partyLocation = {
  address: "Näs Gård Bjurbäck Näs 1, 565 92 Mullsjö",
  lat: 57.861859,
  lng: 13.779437,
};

const Directions  = () => {
    return (
      <div className={isMobileView() ? "mobileContainer" : "desktopContainer"}>
        <h1 className={isMobileView() ? "mobileHeader" : "desktopHeader"}>
          Buss & Vägbeskrivning
        </h1>
        <h3 style={{marginLeft: "15vw"}}>Buss</h3>
        
        <ul className={isMobileView() ? "mobileList" : "desktopList"}>
        Vi har bokat en buss för er som är intresserade av att åka med.
        Bussen kör följande rutt:
        <br/><br/>
        <li><span>Nässjö (Södra Torget 11:00)</span></li>
        <li><span>Jönköping (utanför Best  Western John Bauer Hotell 11:40)</span></li>
        <li><span>Mullsjö (VIP Motell 12:15)</span></li>
        <li><span>Bjurbäcks kyrka (12:30)</span></li>
        <br/>
        Efter vigseln transporteras ni till bröllopsfesten på Näs Gård.
        Samma vända när du dansat färdigt med avgång 02:30 från Näs Gård.
        Bussbiljetten kostar 100 kr per person t/r. För att boka bussbiljett swisha till **********. 
        Uppge namn på de passagerare som biljetterna gäller samt fyll i på anmälan till bröllopet.</ul>
        <h3 className={isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"}>Vägbeskrivning</h3>
      <div style={{marginLeft: "15vw"}}>
        <h4>Adress till kyrkan:</h4> <br/><p>Bjurbäcks kyrka <br/>565 92 Mullsjö</p>
        <br/><br/>
        <h4>Adress till bröllopsfesten:</h4> <br/><p>Näs Gård <br/>Bjurbäck Näs 1 <br/>565 92 Mullsjö</p>
      </div>
        <h3
          className={isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"}
        >
          Vigseln
        </h3>
        <Map
          location={location}
          zoomLevel={17}
        />
        <h3
          className={isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"}
        >
          Festen
        </h3>
        <Map
          location={partyLocation}
          zoomLevel={17}
        />
      </div>
    );
}

export default Directions;