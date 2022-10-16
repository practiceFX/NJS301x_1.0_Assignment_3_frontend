import React from 'react';
import './style/login.scss';
import { Link } from 'react-router-dom';
import { Button, CardBody, CardTitle, Form, FormGroup, Row } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { registerUser } from '../store/asynAction';

const Register = () => {
    const email = React.useRef();
    const password = React.useRef();
    const retypePassword = React.useRef();
    const dispatch = useDispatch();
    const handleSignup = (e) => {
        e.preventDefault();

        let username = e.target.username.value;
        let password = e.target.password.value;
        let retypePassword = e.target.retypePassword.value;

        if (password == retypePassword) {
            dispatch(registerUser(
                username,
                password,
                retypePassword
            ))
        }
    }
    return (
        <CardBody className={`sign_in`} style={{ background: 'url(https://www.apple.com/v/iphone/buy/i/images/meta/og__fdbmon7f382m.jpg?202203240659)' }}>
            <Row className={`inner_sign_up`}>
                <form onSubmit={handleSignup}>
                    {/* <Form> */}
                    <CardTitle className={`h3 title`}>
                        <strong>
                            Sign Up
                        </strong>
                    </CardTitle>
                    <FormGroup className={`input`}>
                        <input type='email' placeholder='Email' ref={email} name='username' />
                    </FormGroup>
                    <FormGroup className={`input`}>
                        <input type='password' placeholder='Password' ref={password} name='password' />
                    </FormGroup>
                    <FormGroup className={`input`}>
                        <input type='password' placeholder='retype password' ref={retypePassword} name='retypePassword' />
                    </FormGroup>
                    <button className={`button`} type='submit'>SIGN UP</button>
                    <CardTitle className={`text-center link`}>
                        Login? <Link to='/login'> Click </Link>
                    </CardTitle>
                    {/* </Form> */}
                </form>
            </Row>
        </CardBody >
    );
}

export default Register;
