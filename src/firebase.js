import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBufB1o0slF_nrRdJHXxRsydNRorVSlH20",
  authDomain: "react-authentication-7eb37.firebaseapp.com",
  projectId: "react-authentication-7eb37",
  storageBucket: "react-authentication-7eb37.appspot.com",
  messagingSenderId: "214274895807",
  appId: "1:214274895807:web:50c80d206378cea8b5bb0a",
  measurementId: "G-WNG5EPRPHK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;