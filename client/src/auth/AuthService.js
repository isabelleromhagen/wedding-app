
  import axios from "axios";

  // const rootUrl = "http://localhost:9000";
  // const rootUrl = "https://www.majanton2021.se";
  const rootUrl = "https://majanton2021.herokuapp.com";

  const apiInstance = axios.create({
    baseURL: "http://localhost:9000/",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const setAuthToken = (token) => {
    if (token) {
      apiInstance.defaults.headers.common["x-auth-token"] = token;
      localStorage.setItem("token", token);
      return true;
    } else {
      delete apiInstance.defaults.headers.common["x-auth-token"];
      localStorage.removeItem("token");
      return false;
    }
  };

  export default { 
    login: (user) => {
      return fetch(rootUrl + "/users", {
        method: "post",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      }).then((res) => {
        if (res.status !== 401) {
          return res.json().then((data) => data);
        } else {
          return {
            isAuthenticated: false,
            user: { id: null, username: "" },
            message: { msgBody: "Unauthorized", msgError: true },
          };
        }
      });
    },
    //return current user if authenticated
    isAuthenticated: (token) => {
      return fetch(rootUrl + "/users/me", {
        method: "post",
        body: JSON.stringify(token),
        headers: { "Content-Type": "x-auth-token" },
      }).then((res) => {
        if (res.status !== 401) {
          return res.json().then((data) => data);
        } else {
          return {
            isAuthenticated: false,
            user: { _id: null, username: "" },
            message: { msgBody: "Unauthorized", msgError: true },
          };
        }
      });
    },
  };