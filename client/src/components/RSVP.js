import React, { useState } from "react";
import { isMobileView } from "../utils/MobileView";
import { ToastContainer, toast } from "react-toastify";
import Loader from 'react-loader-spinner'
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import GuestService from "../auth/GuestService";

const RSVP = () => {  

const [bus, setBus] = useState("");
const [guest, setGuest] = useState({ name: "", email: "", message: "", song:""});
const [showSpinner, setShowSpinner] = useState(false);

const onChange = (e) => {
  setGuest({ ...guest, [e.target.name]: e.target.value });
};

const toggleBus = (e) => {
  e.preventDefault();
  if(e.target.checked) {
    setBus('ja');
  } else {
    setBus('nej');
  }
}

const onSubmit = (e) => {
  e.preventDefault();
  const guestData = {name:guest.name, email:guest.email, message:guest.message, bus:bus, song:guest.song};
  setShowSpinner(true);
  GuestService.register(guestData).then((data) => {
    setShowSpinner(false);
    notify(data);
  });
};

const notify = (data) => {
   toast(`${data.name} har anmälts!`);
}

  return (
    <div>
      <div 
      className={isMobileView() ? "mobileDinnerDiv" : "desktopDinnerDiv"}>
        
        <h3 className={isMobileView() ? "mobileDinnerHeader" : "desktopFormHeader"} 
        >
          Bröllopsmiddagen
        </h3>
        <form onSubmit={onSubmit} 
        >
          <p>Namn</p>
          <input
            type="textField"
            name="name"
            placeholder="Namn"
            className="formItemDesktop"
            value={guest.name}
            onChange={onChange}
            required
          />
          <p>Epost</p>
          <input
            type="textField"
            name="email"
            placeholder="Epost"
            className="formItemDesktop"
            value={guest.email}
            onChange={onChange}
            required
          />
          <p>Allergier och specialkost</p>
          <input
            type="textField"
            name="message"
            placeholder="Allergier och specialkost"
            className="formItemDesktop"
            value={guest.message}
            onChange={onChange}
          />
          <p style={{display:"inline", marginRight:"1vh", paddingBottom:"50vh"}}>Bussbiljett</p>
          <input
            type="checkbox"
            name="bus"
            value={guest.bus}
            onChange={(e) => toggleBus(e)}
            />
            <p style={{marginTop:"4vh"}}>Önskelåt till dansgolvet</p>
          <input
            type="textField"
            name="song"
            placeholder="Önskelåt"
            className="formItemDesktop"
            value={guest.song}
            onChange={onChange}
            
          />
          <button type="submit" style={{display:"block"}}>Skicka in</button>
          <ToastContainer />
          { showSpinner &&  
          (<Loader type="Puff"
            color="#757575"
            height={100}
            width={100}
            timeout={3000}/>)}
        </form>
      </div>
    </div>
  ); 
}

export default RSVP;