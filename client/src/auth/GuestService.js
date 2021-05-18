// const rootUrl = "http://localhost:9000";
// const rootUrl = "https://www.majanton2021.se";
const rootUrl = "https://majanton2021.herokuapp.com";

export default {

  getGuests: async (token) => {
    const response = await fetch(rootUrl + "/guests/list", {
      method: 'GET',
      headers: {
        'x-auth-token': token
      }
    });
    return response.json();
  },
  getPerformances: async (token) => {
    const response = await fetch(rootUrl + "/guests/performance", {
      method: 'GET',
      headers: { 
        'x-auth-token': token
        }
    });
    return response.json();  
  },
  getPadel: async (token) => {
    const response = await fetch(rootUrl + "/guests/padel", {
      method: 'GET',
      headers: { 
        'x-auth-token': token 
        }
    });
        return response.json();
  },
  register: (guest) => { 
    return fetch(rootUrl + "/guests", {
      method: "POST",
      body: JSON.stringify(guest),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  registerPerformance: (performance) => {
    return fetch(rootUrl + "/guests/performance", {
      method: "post",
      body: JSON.stringify(performance),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
  registerPadel: (padel) => {
    return fetch(rootUrl + "/guests/padel", {
      method: "post",
      body: JSON.stringify(padel),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => data);
  },
};

// http://localhost:9000