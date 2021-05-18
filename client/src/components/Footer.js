import React, {useState, useEffect} from "react";
import { isMobileView } from "../utils/MobileView";
import "../styling/Footer.css";

const Footer = () => {
    const [endDate] = useState(new Date("Aug 14, 2021 13:00:00").getTime());
    const [timeLeft, setTimeLeft] = useState();
    const calculateTimeLeft = () => {
        let now = new Date().getTime();
        let distance = endDate - now;
        let days = Math.floor(distance/(1000 * 60 * 60 * 24));
        let hours = Math.floor((distance %(1000 * 60 * 60 * 24))/ (1000*60*60));
        let minutes = Math.floor ((distance % (1000*60*60))/(1000*60));
        return <p id="countdown">{days} dagar {hours} timmar {minutes} minuter kvar</p>;
    }
    useEffect(() => {
        setInterval(() => {
            setTimeLeft(calculateTimeLeft);
        }, 1000*60);
    })

    return (
      <div className={isMobileView() ? "mobileTime" : "desktopTime"}>
        <h4>{timeLeft}</h4>
      </div>
    );
}

export default Footer;