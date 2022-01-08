import React from 'react'
import '../App.css'
const Login2 = (props) => {

    const { email , setemail, password , setpassword , handlelogin , handlesignup ,
    hasaccount , sethasaccount , emailerror, passworderr} = props
    return (
        <div>
            <section className='login'>
                <h1>heeloo</h1>
                <div className='loginContainer'>
                     <label>username</label>
                     <input
                    type="text"
                    autoFocus
                    required
                    value={email}
                    onChange={(e)=>setemail(e.target.value)}/>
                    <p className='errorMsg'>{emailerror}</p>
                    <label>password</label>
                    <input
                    type="password"
                    autoFocus
                    required
                    value={password}
                    onChange={(e)=>setpassword(e.target.value)}/>
                    <p className='errorMsg'>{passworderr}</p>
                    <div className='btnContainer'>
                        {
                               
                            hasaccount ? (
                                <>
                                <button onClick={handlelogin}>
                                    Sign In 
                                </button>
                               <p>
                                 Don't have an account? <span
                                 onClick={()=> sethasaccount(!hasaccount)}> Sign Up</span>
                               </p>
                                </>
                            ):(
                                <>
                                 <button onClick={handlesignup}>
                                    Sign up
                                </button>
                               <p>
                                have an account <span
                                onClick={()=> sethasaccount(!hasaccount)} >Sign In</span>
                               </p>
                                </>

                            )
                        }

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login2
