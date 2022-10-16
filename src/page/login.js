import React from 'react';
import './style/login.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { CardBody, CardTitle, FormGroup, Row } from 'reactstrap';
import { loginUser } from '../store/asynAction';
import Cookies from 'universal-cookie';


const Login = () => {
    const navigate = useNavigate();
    const email = React.useRef();
    const password = React.useRef();
    const dispatch = useDispatch();
    const cookie = new Cookies();
    const [checkCookie, setcheckCookie] = React.useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        let username = e.target.username.value;
        let password = e.target.password.value;
        dispatch(loginUser(username, password));
        setcheckCookie(cookie.get('id')?.key);
    }
    React.useEffect(() => {
        if (checkCookie != undefined) {
            navigate('/');
        }
    }, [])
    return (
        <CardBody className={`sign_in`} style={{ background: 'url(https://www.apple.com/v/iphone/buy/i/images/meta/og__fdbmon7f382m.jpg?202203240659)' }}>
            <Row className={`inner_sign_up`}>
                <form onSubmit={handleSubmit} >
                    <CardTitle className={`h3 title`}>
                        <strong>
                            Sign In
                        </strong>
                    </CardTitle>
                    <FormGroup className={`input`}>
                        <input type='email' placeholder='Email' ref={email} name='username' />
                    </FormGroup>
                    <FormGroup className={`input`}>
                        <input type='password' placeholder='Password' ref={password} name='password' />
                    </FormGroup>
                    <button className={`button`} type='submit'
                    // onClick={handleSumbit}
                    > SIGN IN</button>
                    <CardTitle className={`text-center link`}>
                        Create an account? <Link to='/register'> Sign up </Link>
                    </CardTitle>
                    <CardTitle className={`text-center link`}>
                        <Link to='/'> Home </Link>
                    </CardTitle>
                </form>
            </Row>
        </CardBody >
    );
}

export default Login;
