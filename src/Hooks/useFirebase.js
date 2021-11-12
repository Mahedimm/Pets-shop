import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeFirebase from "../Pages/Account/Firebase/firebase.initialize";

initializeFirebase();



const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin,setAdmin] = useState(false);
    const googleProvider = new GoogleAuthProvider();
    
    
    //SignUp with email and password
    const registerUser = (name,email,password,history,location) =>{
         setIsLoading(true);
         createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
                const user = userCredential.user;
            // Signed in 
            const newUser = {email:user.email,displayName:name,uid:userCredential.user.uid};
            setUser(newUser);
            
            //save user info in database
            saveUserInfo(email,name,'POST');
            
            setAuthError('');
            profile(name)
            const redirect_url = location.state?.from || '/home';
            history.push(redirect_url);
           
          })
          .catch((error) => {
            // const errorCode = error.code;
             setAuthError(error.message);
           
          })
          .finally(()=>setIsLoading(false));
        
      }

        //SignIn with email and password
        const loginUser = (email,password,history,location) =>{
            setIsLoading(true);
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                // Signed in 
              
                setUser(user);
                setAuthError('');
                const redirect_url = location.state?.from || '/home';
                history.push(redirect_url);
              })
              .catch((error) => {
                // const errorCode = error.code;
                setAuthError(error.message);
              })
              .finally(()=>setIsLoading(false));
        }

    //sign in using Google
    const signInWithGoogle = (history,location) => {
        signInWithPopup(auth, googleProvider)
        .then((res) => {
           
            const user = res.user;
            setUser(user);
            
            //send info database
            saveUserInfo(user.email,user.displayName,'PUT');
            const redirect_url = location.state?.from || '/home';
            history.push(redirect_url);
        }).catch((err) => {
            setAuthError(err.message);
        }).finally(() => setIsLoading(false));
        
      }
      //observer User state
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            
            } else {
              setUser({})
            }
            setIsLoading(false);
          });
          return ()=> unSubscribe;
    },[])

        //logout
        const logOut = ()=>{
        setIsLoading(true);
         signOut(auth).then(() => {
             // Sign-out successful.
           }).catch((error) => {
             // An error happened.
           })
           .finally(()=>setIsLoading(false));
        }
        
      //update profile
    const profile = (name)=>{
         updateProfile(auth.currentUser, {
           displayName: name, 
         })
         .then(() => {
            // Profile updated!
          }).catch((error) => {
           
          });
         
       }

       //save database user info
    const saveUserInfo = (email,displayName,method)=>{
        const  user = {email,displayName};
        fetch('http://localhost:5000/users',{
          method: method,
          headers:{
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data =>setAdmin(data.admin))
      },[user.email])
    return {
        user,
        admin,
        authError,
        isLoading,
        signInWithGoogle,
        profile,
        registerUser,
        loginUser,
        logOut,
    }
};

export default useFirebase;