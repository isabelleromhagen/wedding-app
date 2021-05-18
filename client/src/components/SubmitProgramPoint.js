import React, {useState} from "react";
import { isMobileView } from "../utils/MobileView";
import { ToastContainer, toast } from "react-toastify";
import Loader from 'react-loader-spinner'
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import GuestService from '../auth/GuestService';


const SubmitProgramPoint = () => {

  const [performance, setPerformance] = useState({ name: "", relation: "", email: "", phone: "", type: "", time: "", equipment:"", song: "" });
  const [showSpinner, setShowSpinner] = useState(false);

  const onChange = (e) => {
    setPerformance({ ...performance, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setShowSpinner(true);
    GuestService.registerPerformance(performance).then((data) => {
      setShowSpinner(false);
      notify(data);
    });
  };

  const notify = (data) => {
    toast(`Uppträdande med ${data.name} har anmälts!`);
  };

  return (
    <div >
      <div className={isMobileView() ? "mobileProgramDiv" : "desktopProgramDiv"}>
        <h3 className={isMobileView() ? "mobileDinnerHeader" : "desktopFormHeader"}>
          Anmäl programpunkt
        </h3>
        <form onSubmit={onSubmit}>
          <h4>Ditt/era namn</h4>
          <input
            type="textField"
            name="name"
            placeholder="Namn"
            className="formItemDesktop"
            value={performance.name}
            onChange={onChange}
            required
          ></input>
          <h4>Relation till brudparet</h4>
          <input
            type="textField"
            name="relation"
            placeholder="Relation till brudparet"
            className="formItemDesktop"
            value={performance.relation}
            onChange={onChange}
            required
          ></input>
          <h4>Epost</h4>
          <input
            type="textField"
            name="email"
            placeholder="Epost"
            className="formItemDesktop"
            value={performance.email}
            onChange={onChange}
            required
          ></input>
          <h4>Telefonnummer</h4>
          <input
            type="textField"
            name="phone"
            placeholder="Telefonnummer"
            className="formItemDesktop"
            value={performance.phone}
            onChange={onChange}
            required
          ></input>
          <h4>Typ av uppträdande</h4>
          <p>Vill du hålla ett fint tal eller kanske har du tänkt sjunga en sång för brudparet? Beskriv kort nedan vad du planerar.</p>
          <input
            type="textField"
            name="type"
            placeholder="Typ av uppträdande"
            className="formItemDesktop"
            value={performance.type}
            onChange={onChange}
            required
          ></input>
          <h4>Beräknad tid</h4>
          <p>Maxtid: ca 5 minuter</p>
          <input
            type="textField"
            name="time"
            placeholder="Beräknad tid"
            className="formItemDesktop"
            value={performance.time}
            onChange={onChange}
            required
          ></input>
          <h4>Utrustning</h4>
          <p>Behöver du något särskilt till din programpunkt?</p>
          <p>I lokalen finns mikrofoner, högtalare och projektor med tillhörande dator.</p>
          <input
            type="textField"
            name="equipment"
            placeholder="Utrustning"
            className="formItemDesktop"
            value={performance.equipment}
            onChange={onChange}
          ></input>
          <h4>Introlåt</h4>
          <p>Vilken låt vill du ska spelas när just din programpunkt ska hållas?</p>
          <input
            type="textField"
            name="song"
            placeholder="Introlåt"
            className="formItemDesktop"
            value={performance.song}
            onChange={onChange}
          ></input>
          <p>Sista datum för att anmäla tal/spex: 14 juni 2021</p>
          <button type="submit">Skicka in</button>
          <ToastContainer/>
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
};

export default SubmitProgramPoint;