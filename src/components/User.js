import React , { useState} from 'react'
import { createUserWithEmailAndPassword , onAuthStateChanged
, signOut , signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from '../firebase-config';
import { Link, useNavigate} from 'react-router-dom'

export const User = () => {
    const [regemail, setregemail] = useState("");
    const [regpass, setpass] = useState("");
    const [loginmail, setloginemail] = useState("");
    const [loginpass, setlogpass] = useState("");
    const [user , setuser]= useState({})
    const navigate = useNavigate()

    onAuthStateChanged(auth , (currentUser)=>{
        setuser(currentUser);
    })
    const register = async ()=>{
  try {
      const user = await createUserWithEmailAndPassword(
          auth ,
          regemail,
          regpass
      );
      navigate('/')
      console.log(user);

  } 
  catch (error){
      console.log(error.message)
  }

       

    }
    const login = async()=>{

        try {
            const user = await signInWithEmailAndPassword(
              auth,
              loginmail,
              loginpass
            );
            console.log(user);
          } catch (error) {
            console.log(error.message);
          }
        
    }
    const logout = async ()=>{
        
        await signOut(auth);
    }
    return (
        <div>
        <section className='login'>
        <div className='loginContainer'>
            <label>Register user</label>
            <input placeholder='enter email'
             type="email"
             autoFocus
             required
            onChange={(e)=>{setregemail(e.target.value)}}></input>

            <input placeholder='password'
             type="password"
             autoFocus
             required
             onChange={(e)=>{setpass(e.target.value)}}></input>
            <div className='btnContainer'>
            <button onClick={register}>create user</button>
            </div>
            <label>Login</label>
            <input placeholder='enter email'
             type="email"
             autoFocus
             required
            onChange={(e)=>{setloginemail(e.target.value)}}></input>

            <input placeholder='password'
             type="password"
             autoFocus
             required
             onChange={(e)=>{setlogpass(e.target.value)}}></input>
       
       <div className='btnContainer'>
        
           <button onClick={login}
            > Login</button>
            
     </div>
            <label>user logged in</label>
            {user?.email}
            <div className='btnContainer'>
            <button onClick={logout}> sign out </button>
            </div>

        </div>
        </section>
        </div>
    )
}
