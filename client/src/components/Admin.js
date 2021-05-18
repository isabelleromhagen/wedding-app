import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../auth/UserContext";
import GuestService from "../auth/GuestService";
import AuthService from "../auth/AuthService";
import { isMobileView } from "../utils/MobileView";
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

const Admin = () => {
  const currentUser = useContext(UserContext);
  const [guests, setGuests] = useState([]);
  const [user, setUser] = useState({ username: "", password: "" });
  const [performances, setPerformances] = useState([]);
  const [padel, setPadel] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);

    const onChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };


    const fetchGuestData = (token) => {
            setShowSpinner(true);
            GuestService.getGuests(token).then((data) => {
              
              setGuests(data);
              setShowSpinner(false);
            });
            setShowSpinner(true);
            GuestService.getPerformances(token).then((data) => {
              
              setPerformances(data);
              setShowSpinner(false);
            });
            setShowSpinner(true);
            GuestService.getPadel(token).then((data) => {
              setPadel(data);
              setShowSpinner(false);
            });
    }

    const login = (e) => {
      e.preventDefault();
      setShowSpinner(true);
      AuthService.login(user).then((data) => {
        const { token, user } = data;
        if (token) {
          currentUser.setUser(user);
          currentUser.setIsAuthenticated(true);
          currentUser.setToken(token);
          setIsLoggedIn(true)
          setToken(token);
          fetchGuestData(token);
          setShowSpinner(false);
        }
      });
    };

    return (
      <div>
        {currentUser && isLoggedIn ? (
          <div
            className={isMobileView() ? "mobileContainer" : "desktopContainer"}
          >
            <h1 className={isMobileView() ? "mobileHeader" : "desktopHeader"}>
              Admin
            </h1>
            <div>
              <h3
                className={
                  isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"
                }
              >
                Anmälda gäster
              </h3>
              {guests && (
                <div>
                  {guests.map((guest) => (
                    <div key={guest._id} className="guestsDiv">
                      <p className="guest">{guest.name}</p>
                      <p className="guest">{guest.email}</p>
                      <p className="guest">{guest.message}</p>
                      <p className="guest">{guest.bus}</p>
                      <p className="guest">{guest.song}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3
                className={
                  isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"
                }
              >
                Anmälda programpunkter
              </h3>
              {performances && (
                <div>
                  {performances.map((performance) => (
                    <div key={performance._id} className="guestsDiv">
                      <p className="guest">{performance.name}</p>
                      <p className="guest">{performance.type}</p>
                      <p className="guest">{performance.time}</p>
                      <p className="guest">{performance.equipment}</p>
                      <p className="guest">{performance.song}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <h3
                className={
                  isMobileView() ? "mobileLocSubHead" : "desktopLocSubHead"
                }
              >
                Anmälningar padel
              </h3>
              {padel && (
                <div>
                  {padel.map((participant) => (
                    <div key={participant._id} className="guestsDiv">
                      <p className="guest">{participant.name}</p>
                      <p className="guest">{participant.email}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
            className={isMobileView() ? "mobileContainer" : "desktopContainer"}
          >
            <form onSubmit={login}>
              <span>Användarnamn</span>
              <input
                name="username"
                onChange={onChange}
                value={user.username}
              />
              <br />
              <span>Lösenord</span>
              <input
                name="password"
                type="password"
                onChange={onChange}
                value={user.password}
              />
              <br />
              <button type="submit" className="logInButton">
                Log in
              </button>
              { showSpinner &&  
              (<Loader type="Puff"
                color="#757575"
                height={100}
                width={100}
                timeout={3000}/>)}
              <br />
            </form>
          </div>
        )}
      </div>
    );
};

export default Admin;
