import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import EntryCard from '../EntryCard/EntryCard';
import Input from '../Input/Input';
import InputGroup from '../InputGroup/InputGroup';
import { LoginPage, PageHeader } from '../Login/style';

const SignUp = () => {
    return (
        <LoginPage>
            <PageHeader></PageHeader>
            <EntryCard>
                <h2>Sign Up</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <InputGroup>
                        <label htmlFor="signup-name">Full Name</label>
                        <Input type="text" placeholder="Name Surname" id="signup-name" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="signup-email" />
                    </InputGroup>
                    <InputGroup>
                        <label htmlFor="signup-password">Password</label>
                        <Input type="password" placeholder="Password" id="signup-password" />
                    </InputGroup>
                    <Button type="submit" full>Sign Up</Button>
                </form>
                <span>
                    Already have an account?
                    <Link to="/login">Login</Link>
                </span>
            </EntryCard>
        </LoginPage>
    )
}

export default SignUp;