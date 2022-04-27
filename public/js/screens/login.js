import { auth } from '../api.js'
import { hashAuthData } from '../utils.js';

const IDS = {
  EMAIL: "email-inpt",
  PASSWORD: "password-inpt",
  LOGIN: "login-btn"
};

const handleLogin = () => {
  const email = document.getElementById(IDS["EMAIL"]).value;
  const password = document.getElementById(IDS["PASSWORD"]).value;

  auth({email, password})
    .then(res => {
      if (!res.ok) {
        return;
      }

      window.localStorage.setItem("token", hashAuthData({email, password}));
      window.location.href = "index.html";
    });
};

document.getElementById(IDS.LOGIN).onclick = handleLogin;
