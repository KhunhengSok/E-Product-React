import React, { useState } from "react";
import { Link, Redirect} from "react-router-dom";
import Axios from "axios"
import { Form, Input, Label, Button } from "reactstrap";

const RegisterForm = () => {
    const [state, setState] = useState({
        username: "",
        email: "", 
        password: "",
        password_confirm: "",
        phoneNum: "",
        redirect: false 
    })
    const [error, setError] = useState({});

    const onRegisterButtonClick = function(event){
        console.log(state)
        Axios.post('http://localhost:5000/api/register', state ).then(result=>{
            setState({
                redirect: true
            })
        }).catch((error)=>{
            // console.log(error.response.data.errors)
            setError(error.response.data.errors);
        })

    }

    const handleChange = function(event){
        let newState = state 
        newState[event.target.name] =  event.target.value
        console.log(event.target.name)
        setState(newState)
    }

    const errorStyle = {
        'color': 'red',
        'fontSize': '0.9rem',
        'fontWeight': '600',
    }

    if(state.redirect){
        return <Redirect to = '/auth/admin/login' push/>
    }else{
        return(
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100 p-t-50 p-b-90">
                        <Form className="login100-form validate-form flex-sb flex-w">
                        <span className="login100-form-title p-b-51">
                            Register
                        </span>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Username is required">
                                <Input className="input100" type="text" onChange={handleChange} name="username" placeholder="Username"/>
                                <span className="focus-input100"/>
                                <span className='' style={errorStyle} >{error.username}</span>
                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Email is required">
                                <Input className="input100" type="email" onChange={handleChange} name="email" placeholder="Email"/>
                                <span className="focus-input100"/>
                                <span className='' style={errorStyle} >{error.email}</span>

                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Password is required">
                                <Input className="input100" type="password" onChange={handleChange}  name="password" placeholder="Password"/>
                                <span className="focus-input100"/>
                                <span className='' style={errorStyle} >{error.password}</span>

                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Confirm Password is required">
                                <Input className="input100" type="password" onChange={handleChange}  name="password_confirm" placeholder="Confirm Password"/>
                                <span className="focus-input100"/>
                                <span className='' style={errorStyle} >{error.password_confirm}</span>

                            </div>

                            <div className="wrap-input100 validate-input m-b-16" data-validate="Confirm Password is required">
                                <Input className="input100" type="text" onChange={handleChange}  name="phoneNum" placeholder="Phone Number"/>
                                <span className="focus-input100"/>
                                <span className='' style={errorStyle} >{error.phoneNum}</span>

                            </div>

                            <div className="container-login100-form-btn m-t-17">
                                <Button id="registerButton" onClick={onRegisterButtonClick} className="login100-form-btn">
                                    Register
                                </Button>
                            </div>

                        </Form>
                    </div>
                </div>
            </div>
    )};
};
export default RegisterForm;