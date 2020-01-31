import React, { useState } from "react";
import { Link, Redirect} from "react-router-dom";

import { Form, Input, Label, Button } from "reactstrap";
import Axios from 'axios'

const LoginForm = () => {
    const [state, setState] = useState({
        email: "", 
        password: "",
        redirect: false
    })

    const [error, setError] = useState({});

    const onLoginButtonClick = function(event){
        console.log(state)
        Axios.post('http://localhost:5000/api/login', state ).then(result=>{
            console.log('log in')
            setState({
                redirect: true
            })

        }).catch((error)=>{
            console.log(error.response.data.errors)
            setError(error.response.data.errors);
        })
    }

    const handleChange = function(event){
        let newState = state 
        newState[event.target.name] =  event.target.value
        setState(newState)
    }

    const errorStyle = {
        'color': 'red',
        'fontSize': '0.9rem',
        'fontWeight': '600',
    }

    if(state.redirect){
        return <Redirect to = '/' push/>

    }else{

        return(
            
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-50 p-b-90">
                        <Form className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-51">
                            Login
                        </span>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                                <Input className="input100" type="text" name="email" placeholder="Email" onChange={handleChange}/>
                                    <span className="focus-input100"/>
                                    <span className='' style={errorStyle} >{error.email}</span>

                                    
                            </div>


                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <Input className="input100" type="password" name="password" placeholder="Password" onChange={handleChange}/>
                                    <span className="focus-input100"/>
                                    <span className='' style={errorStyle} >{error.password}</span>

                            </div>

                            <div className="flex-sb-m w-full p-t-3 p-b-24">
                                <div className="contact100-form-checkbox">
                                    <Input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me"/>
                                        <Label className="label-checkbox100" htmlFor="ckb1">
                                            Remember me
                                        </Label>
                                </div>

                                <div>
                                    <Link to="#" className="txt1">
                                        Forgot?
                                    </Link>
                                </div>
                            </div>

                            <div className="container-login100-form-btn m-t-17">
                                <Button className="login100-form-btn" onClick={onLoginButtonClick}>
                                    Login
                                </Button>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
    )};
};

export default LoginForm;