import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import EntryCard from '../EntryCard/EntryCard';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';
import { LoginPage, PageHeader } from './style';

const Login = () => {
    return (
        <LoginPage>
            <PageHeader></PageHeader>
            <EntryCard>
                <h2>Log In</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="login-email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="login-password">Password</label>
                        <Input type="text" placeholder="password" id="login-password" />
                    </InputGroup>
                    <Button type="submit" full>Log In</Button>
                </form>
                <span>
                    Don't have an account?
                    <Link to="/sign-up">Sign Up</Link>
                </span>
            </EntryCard>
        </LoginPage>
    )
}

export default Login;