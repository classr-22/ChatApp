import { Backdrop, CircularProgress, Button } from '@mui/material'
import React, { useState } from 'react'
import './myStyles.css'
import TextField from '@mui/material/TextField';
import { motion, AnimatePresence } from "framer-motion"
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Toaster from './Toaster';

function Login() {
    const [showlogin, setShowLogin] = useState(false);
    const [data, setData] = useState({ name: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const [logInStatus, setLogInStatus] = useState("");
    const [signInStatus, setSignInStatus] = useState("");

    const navigate = useNavigate();

    const changeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const loginHandler = async (e) => {
        setLoading(true);
        console.log(data);
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                },
            }

            const response = await axios.post(
                "http://localhost:5000/user/login/",
                data,
                config
            )

            console.log("Login :", response);
            setLogInStatus({ msg: "Success", key: Math.random() });
            setLoading(false);
            localStorage.setItem("userData", JSON.stringify(response));
            navigate("/app/welcome");
        } catch (error) {
           
            setLogInStatus({
                msg: "Invalid username or password",
                key: Math.random()
            })
        }
        setLoading(false);
    };

    const signUpHandler = async () => {
        setLoading(true);
        console.log(data);
        try {
            const config = {
                headers: {
                    "content-type": "application/json",
                },
            }

            const response = await axios.post(
                "http://localhost:5000/user/register/",
                data,
                config
            )

            console.log(response);
            setSignInStatus({ msg: "Success", key: Math.random() });
            navigate("/app/welcome");
            localStorage.setItem("userData", JSON.stringify(response));
            setLoading(false);
            
           
        } catch (error) {
            console.log(error)
            if (error.response.status === 405) {
                setSignInStatus({
                    msg: "User with this email Id already exists",
                    key: Math.random()
                })
            }
            if (error.response.status === 406) {
                setSignInStatus({
                    msg: "User name already taken, Please take another one",
                    key: Math.random()
                })
            }
            if (error.response.status === 500) {
                setSignInStatus({
                    msg: "User name or email Id already taken, Please take another one",
                    key: Math.random()
                })
            }
            if (error.response.status === 400) {
                setSignInStatus({
                    msg: "Please Enter all the fields",
                    key: Math.random()
                })
            }


            setLoading(false);
        }

    };
    return (
        <>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
            {showlogin &&
                (   <div
                        style={{
                            backgroundColor: "#f4f5f8", display: "flex", justifyContent: "center", alignItems: "center", height: "90vh",
                            width: "90vw", borderRadius: "20px"
                        }}
                        className='Login-container'
                    >

                        <div style={{ display: "flex", flex: "0.3", justifyContent: "center", alignItems: "center" }}>
                            <img src="live-chat.png" style={{ height: "300px", width: "300px" }} />
                        </div>

                        <div style={{
                            backgroundColor: "white", display: "flex", flex: "0.7", justifyContent: "center", alignItems: "center",
                            height: "85vh", width: "85vw", margin: "20px", borderRadius: "20px", flexDirection: "column", gap: "20px",
                            fontFamily: "sans-serif,Geneva,Verdana,Segoe UI", color: "#63d7b0", fontWeight: "bolder"
                        }} className='Login-container'>
                            <p style={{ marginBottom: "20px", fontSize: "40px", fontWeight: "bolder" }}>Login to your Account</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
                                <TextField
                                    required
                                    onChange={changeHandler}
                                    id="standard-basic"
                                    label="Enter Username"
                                    variant='outlined'
                                    color='secondary'
                                    name='name'
                                />
                                <TextField
                                    required
                                    onChange={changeHandler}
                                    id="outlined-password-input"
                                    label="Enter Password"
                                    type="password"
                                    autoComplete="current-password"
                                    name='password'
                                    color='secondary'
                                />


                            </div>
                            <Button variant="outlined" size='large' color='secondary' onClick={loginHandler}>Login</Button>
                            <p>Don't have an Account
                                <span style={{ margin: "5px", color: "purple", cursor: "pointer" }} onClick={() => {
                                    setShowLogin(false);
                                    setSignInStatus("");
                                }
                                }>
                                    <u>Sign Up</u>
                                </span>
                            </p>
                            {logInStatus ? (
                                <Toaster key={logInStatus.key} message={logInStatus.msg}/>
                            ):null}
                        </div>
                    </div>
                
                )}


            {
                !showlogin &&
                (   <div
                        style={{
                            backgroundColor: "#f4f5f8", display: "flex", justifyContent: "center", alignItems: "center", height: "90vh",
                            width: "90vw", borderRadius: "20px"
                        }}
                        className='Login-container'
                    >

                        <div style={{ display: "flex", flex: "0.3", justifyContent: "center", alignItems: "center" }}>
                            <img src="live-chat.png" style={{ height: "300px", width: "300px" }} />
                        </div>

                        <div style={{
                            backgroundColor: "white", display: "flex", flex: "0.7", justifyContent: "center", alignItems: "center",
                            height: "85vh", width: "85vw", margin: "20px", borderRadius: "20px", flexDirection: "column", gap: "20px",
                            fontFamily: "sans-serif,Geneva,Verdana,Segoe UI", color: "#63d7b0", fontWeight: "bolder"
                        }} className='Login-container'>
                            <p style={{ marginBottom: "20px", fontSize: "40px", fontWeight: "bolder" }}>Create your Account</p>
                            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                                <TextField
                                    required
                                    onChange={changeHandler}
                                    id="outlined-required"
                                    label="Enter Username"
                                    defaultValue=""
                                    name='name'
                                    color='secondary'
                                />
                                <TextField
                                    required
                                    onChange={changeHandler}
                                    id="outlined-required"
                                    label="Enter Email Address"
                                    defaultValue=""
                                    name='email'
                                    color='secondary'
                                />
                                <TextField
                                    required
                                    onChange={changeHandler}
                                    id="outlined-password-input"
                                    label="Enter Password"
                                    type="password"
                                    autoComplete="current-password"
                                    name='password'
                                    color='secondary'
                                />

                            </div>
                            <Button variant="outlined" size='large' color="secondary" onClick={signUpHandler}>SIGN UP</Button>
                            <p>Already have an account
                                <span style={{ margin: "5px", color: "purple", cursor: "pointer" }} onClick={() => {
                                    setShowLogin(true);
                                    setLogInStatus("")
                                }
                                }>
                                    <u>Login In</u>
                                </span>
                            </p>
                            {signInStatus?(
                                <Toaster key={signInStatus.key} message={signInStatus.msg}/>
                            ):null}
                        </div>
                    </div>
                )}
        </>
    )
}


export default Login