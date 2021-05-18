import React from "react";
import Home from "./components/Home";
import Directions from "./components/Directions";
import Contact from "./components/Contact";
import SubmitProgramPoint from "./components/SubmitProgramPoint";
import Footer from "./components/Footer";
import People from "./components/People";
import Accommodation from "./components/Accommodation";
import Info from "./components/Info";
import Padel from "./components/Padel";
import Admin from "./components/Admin";
import NotFoundPage from "./components/NotFoundPage";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Sticker from "./images/monogram.jpg";
import Image from "./images/nyHeader.jpg";
import { HashRouter, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { isMobileView } from "./utils/MobileView";
import UserContextProvider from "./auth/UserContext";
import "./styling/App.css";
import "./styling/NavigationBar.css";
import "./styling/Footer.css";

function App() {
  const history = useHistory();
  return (
    <HashRouter>
      <div>
        <img
        src={Sticker}
        alt="monogram"
        className={isMobileView() ? "mobileMonogram" : "desktopMonogram"}
      />
        <img src={Image} className={isMobileView() ? "waterMobile" : "waterDesktop"}/>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/info" component={Info} />
          <Route path="/hitta-hit" component={Directions} />
          <Route path="/toastmadames" component={People} />
          <Route path="/boende" component={Accommodation} />
          <Route path="/osa" component={Contact} />
          <Route path="/programpunkt" component={SubmitProgramPoint} />
          <Route path="/padel" component={Padel} />
          <UserContextProvider>
            <Route path="/admin" component={Admin} />
          </UserContextProvider>
          <Route path="*" component={NotFoundPage} />
        </Switch>
        {/*{<a href="http://www.onlinewebfonts.com" style={{color:"#ffffff"}}>oNline Web Fonts</a>}*/}
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;