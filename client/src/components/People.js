import React from "react";
import "../styling/Map.css";
import { isMobileView } from "../utils/MobileView";
import Malin from "../images/Malin.jpg";
import Augusta from "../images/Augusta.jpg";
import Emmi from "../images/Emmi.png";

const People  = () => {
    return (
      <div className={isMobileView() ? "mobileContainer" : "desktopContainer"}>
        <h1 className={isMobileView() ? "mobileHeader" : "desktopHeader"}>
          Toastmadames
        </h1>
        <p className={isMobileView() ? "mobileText" : "desktopText"}>
          Låt oss presentera bröllopsfestens nyckelpersoner: våra toastmadames Malin, Augusta och Emmi! 
          Vi är förväntansfulla över att få uppleva era tal och spex, dessa anmäler ni till våra toastmadames under fliken ”O.S.A”. 
          De besvarar även om ni har några frågor inför dagen.
        </p>
        <h3
          className={isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"}
        >
          Malin
        </h3>
        <p className={isMobileView() ? "mobileText" : "desktopText"}>
          {" "}
          En kvinna med ett stort hjärta! Brudgummens storasyster boende i
          Göteborg tillsammans med pojkvännen Martin. Arbetar som psykolog på
          ett SIS-hem och spenderar en hel del timmar i beachvolleybollhallen.
          Hälsade på brudparet på deras jorden-runt-resa under en månads tid i
          Malaysia. Malin är en positiv fläkt som inte är rädd för att ta plats.
          Hon är också en bra lyssnare som värnar om sina medmänniskor. Det
          finns också skäl att betrakta henne som lite av en dramatiker…{" "}
        </p>
          <img src={Malin} className={isMobileView() ? "imgMobile" : "imgDesktop"} />
        <h3
          className={isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"}
        >
          Augusta
        </h3>
        <p className={isMobileView() ? "mobileText" : "desktopText"}>
          {" "}
          Ytterligare en kvinna med stort hjärta! Brudens bästa vän boende i
          Nässjö tillsammans med pojkvännen Thommy. Studerar på Jönköping University 
          för att så småningom bli framträdande inom byggbranschen och har
          flera år i rad utsetts till årets skyttedrottning i fotbollslaget FÄM.
          Reste i Centralamerika med bruden i 3 månaders tid & hälsade även hon
          på under brudparets jorden-runt-resa på Hawaii. Augusta är en
          godhjärtad & rolig prick som är grym på att fuldansa (håll ögonen
          öppna under festen). Är även en otrolig sångare! Bruden & Augusta
          kallas inte ovanligtvis för Piff & Puff…{" "}
        </p>
          <img src={Augusta} className={isMobileView() ? "imgMobile" : "imgDesktop"} />
        <h3
          className={isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"}
        >
          Emmi
        </h3>
        <p className={isMobileView() ? "mobileText" : "desktopText"}>
          {" "}
          En tredje kvinna med stort hjärta (inte trodde väl ni att vi skulle
          välja en toastmadame som vi inte tycker har det) Brudgummens
          storasyster boende i Stockholm tillsammans med pojkvännen Kalle.
          Arbetar som fysioterapeut och spelar både basket och beachvolleyboll.
          Har inte hälsat på under brudparets jorden-runt-resa MEN har delat
          flera fina upplevelser på andra platser. Emmi är otroligt omtänksam
          som vet hur man kickar igång en festlig stämning. Om hon skulle sätta
          sig på tvären - bjud henne på lite Marabou apelsinkrokant!
        </p>
          <img src={Emmi} className={isMobileView() ? "imgMobile" : "imgDesktop"}/>
      </div>
    );
}

export default People;