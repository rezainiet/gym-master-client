import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC3Uzs8Exf3Jm4Ds4MGU1L4C7nt8h738WE",
    authDomain: "gym-master-reza.firebaseapp.com",
    projectId: "gym-master-reza",
    storageBucket: "gym-master-reza.appspot.com",
    messagingSenderId: "1019397930601",
    appId: "1:1019397930601:web:9ccd626f6dbb0183d3acf8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;