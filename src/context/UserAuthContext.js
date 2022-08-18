import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    //signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup

} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }){
    
    const [user, setUser] = useState("");

    function signup(email, password){
        return createUserWithEmailAndPassword(auth,email,password);
    }
    function logIn(email, password){
        return signInWithEmailAndPassword(auth,email,password);
    }

    function googleSignIn(){
        const googelAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth,googelAuthProvider);
    }

    useEffect(() =>{
      const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);
    return(
        <userAuthContext.Provider value={{user,signup, logIn, googleSignIn}}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}