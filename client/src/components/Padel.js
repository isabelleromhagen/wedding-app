import React, {useState} from "react";
import { isMobileView } from "../utils/MobileView";
import { ToastContainer, toast } from "react-toastify";
import Loader from 'react-loader-spinner'
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import GuestService from '../auth/GuestService';
import image from '../images/padel.jpg';

const Padel = () => {

    const [padel, setPadel] = useState({
      name: "",
      email: "",
    });
    const [showSpinner, setShowSpinner] = useState(false);

    const onChange = (e) => {
      setPadel({ ...padel, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
      e.preventDefault();
        setShowSpinner(true);
      GuestService.registerPadel(padel).then((data) => {
        setShowSpinner(false);
        notify(data);
      });
    };

    const notify = (data) => {
      toast(`${data.name} har anmälts till padelturneringen!`);
    };
   

          return (
            <div>
              <div
                className={
                  isMobileView() ? "mobileContainer" : "desktopContainer"
                }
              >
                <h1
                  className={isMobileView() ? "mobileHeader" : "desktopHeader"}
                >
                  Padelturnering
                </h1>
                <div style={{marginLeft:"18vw", width:"40vw"}}>
                <span >Vi kommer att ha en padelturnering i Vetlanda på söndagen den 15/8 som börjar runt 13.00
                  Mer information och anmälan kommer här inom en snar framtid!</span>
                  </div>
                <br/>
                
                <br />
                <img src={image} className={isMobileView() ? "imgMobile" : "imgDesktop"}/>
              </div>
            </div>
          );
}

export default Padel;