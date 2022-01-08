import React, { useEffect, useState } from "react";
import auth from "../fire";
import Login2 from './Login2'
const Login = () => {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [emailerror, setemailerror] = useState("");
  const [passerror, setpasserror] = useState("");
  const [hasaccount, sethasaccount] = useState(false);
  
  const clearinputs = ()=>{
      setemail(''),
      setpassword('')
  }

  
  const clearerrors = ()=>{
    setemailerror(''),
    setpasserror('')
}
  const handlelogin = () => {
      clearerrors();
    auth
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
              setemailerror(err.message);
              break;
          case "auth/wrong-password":
               setpasserror(err.message);
               break;

          
        }
      });
  };

  const handlesignup = () => {
    clearerrors();
    auth
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/emaiil-already-inuse":
          case "auth/invalid-email":
              setemailerror(err.message);
              break;
          case "auth/weak-password":
               setpasserror(err.message);
               break;

          
        }
      });
  };

  const handlelogout =()=>{
   
    auth.auth().signOut();
  }

  const authListener =()=>{
      auth.auth().onAuthStateChanged((user)=>{
          if (user) {
              clearinputs();
              setuser(user)
          }

          else{
              setuser("")
          }
      })
  }

  useEffect(()=>{
   authListener();
  },[])

  return (
  <div>
  <Login2
  email={email}
  setemail={setemail}
  password={password}
  setpassword={setpassword}
  handlelogin={handlelogin}
  handlesignup={handlesignup}
  hasaccount={hasaccount}
  sethasaccount={sethasaccount}
  emailerror={emailerror}
  passworderror={passerror}

  ></Login2>
  </div>);
};

export default Login;
