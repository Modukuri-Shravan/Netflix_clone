import React, { useState } from 'react'
import './login.css'
import logo from '../../../assets/logo.png'
const login = () => {
    const [signState, setsignState] = useState("Sign In")

    return (
        <div className="login">
            <img src={logo} alt="" className='logo' />
            <div className="login-form">
                <form>
                    <p>{signState}</p>
                    {signState === "Sign Up" ? <input type="text" placeholder='Your name' id="name" /> : <></>}
                    <input type="text" placeholder='Email or Mobile number' id="email" />
                    <input type="password" placeholder='Password' />
                    <button>{signState}</button>
                </form>
                <div className="form-help">
                {signState === "Sign Up" ? <></> : <>
                    <p>OR</p>
                    <button>Use a sign-in-code</button>
                    <p>Forgot password?</p>
                </>}
                    <div className="remember">
                        <input type="checkbox" name="" id="" />
                        <label >Remember me</label>
                    </div>

                </div>
                <div className="form-switch">
                    {signState === "Sign Up" ? <p>Have an Account? <span onClick={() => setsignState("Sign In")} >Sign In</span> </p> : <><p>New to Netflix? <span onClick={() => setsignState("Sign Up")}>Sign up now.</span> </p></>}


                </div>
            </div>
        </div>
    )
}

export default login