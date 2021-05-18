import React from "react";
import { isMobileView } from "../utils/MobileView";
import Brudparet3 from '../images/Brudparet3.jpg';
import Brudparet4 from '../images/Brudparet4.jpg';

const Accommodation  = () => {
    return (
      <div className={isMobileView() ? "mobileContainer" : "desktopContainer"}>
        <h1 className={isMobileView() ? "mobileHeader" : "desktopHeader"}>
          Boende
        </h1>
        <p className={isMobileView() ? "mobileText" : "desktopText"}>
          Brudparet kommer övernatta på Best Western <a 
          style={{padding:0}}
          href="https://www.johnbauer.se/">John Bauer Hotell</a> i Jönköping under
          bröllopshelgen.
          <br /> Vi ser gärna att fler bor på samma hotell som oss för att maxa
          helgen! <br />
          Andra alternativ är följande:
        </p>
        <br />
        <div className="listDiv">
          <ul className={isMobileView() ? "mobileText" : "desktopText"}>
            <li>
              <a href="http://www.vipmullsjo.se/motell-32443041">
                VIP Mullsjö (motell)
              </a>
            </li>
            <br />
            <li>
              <a href="http://www.mullsjocamping.se/prislista.html">
                Mullsjö camping (stuga)
              </a>
            </li>
          </ul>
        </div>
        <br />
        <p className={isMobileView() ? "mobileText" : "desktopText"}>
          samt ett stort utbud av boende i Jönköping i olika prisklasser
        </p>
        <div className="listDiv">
          <ul className={isMobileView() ? "mobileText" : "desktopText"}>
            <li>
              <a href="https://www.booking.com/index.sv.html?label=gen173nr-1DCAEoggI46AdIM1gEaMgBiAECmAEluAEHyAEN2AED6AEBiAIBqAIDuALOp-X4BcACAdICJGUzOTJmYWU3LTc3ZGEtNGZjMy05MjZmLTdiNDNiYTIzN2I4ONgCBOACAQ;sb_price_type=total&;&label=gen173nr-1DCAEoggI46AdIM1gEaMgBiAECmAEluAEHyAEN2AED6AEBiAIBqAIDuALOp-X4BcACAdICJGUzOTJmYWU3LTc3ZGEtNGZjMy05MjZmLTdiNDNiYTIzN2I4ONgCBOACAQ&sb=1&sb_lp=1&search_form_id=09ae4067d02d01e7&ssne=Borensberg&ssne_untouched=Borensberg&checkin_monthday=14&checkin_year_month=2021-8&checkout_monthday=15&checkout_year_month=2021-8&checkin=2021-08-14&checkout=2021-08-15&group_adults=2&group_children=0&no_rooms=1&group_adults_overlay=2&group_children_overlay=0&no_rooms_overlay=1&lpsr=1&dest_type=city&dest_id=-2492129&ss_raw=j%C3%B6nk&ss_label=J%C3%B6nk%C3%B6ping,%20J%C3%B6nk%C3%B6pings%20l%C3%A4n,%20Sverige&place_id_lon=14.1622&place_id_lat=57.781101&ac_position=0&ac_suggestion_list_length=5&ac_langcode=sv&search_selected=true&ac_size=5&ac_click_type=b&latitude=57.781101&longitude=14.1622&search_pageview_id=09ae4067d02d01e7&fbclid=IwAR2u-nsTqSAM7n55PCv3S7ayf5MR38vKcDIMPpFfY0v6iFjygc6nFYbovlk">
                Boenden i Jönköping
              </a>
            </li>
          </ul>
        </div>
        <img src={Brudparet3} className={isMobileView() ? "imgMobile" : "imgDesktop"} style={{ borderRadius:"8px", marginTop: "10vh"}}/>
        <img src={Brudparet4} className={isMobileView() ? "imgMobile" : "imgDesktop"} style={{ borderRadius:"8px"}}/>
      </div>
    );
}

export default Accommodation;