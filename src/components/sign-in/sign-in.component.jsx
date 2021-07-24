import React, { useState, useEffect} from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
const SignIn = ({ emailSignInStart,googleSignInStart})=> {

    const [userCredentials,setCredentials]  = useState({email:'',password:''});

    const { email, password } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
    

        emailSignInStart(email, password);
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' })
        // }
        // catch (error) {
        //     console.log(error);
        // }

    };

    const handleChange = event => {
        const { value, name } = event.target;
        setCredentials({...userCredentials, [name]: value });
    }
        return (

            <div className='sign-in'>
                <h1 className='title'>I ALready have account</h1>
                <span>Sign in With your email and password</span>
                <form onSubmit={handleSubmit}>

                    <FormInput type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required />

                    <FormInput name='password'
                        value={password}
                        type='password'
                        required
                        label='Password'
                        handleChange={handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >Sign in with google</CustomButton>
                    </div>
                </form>
            </div>)
    }

const mapDispatchToProps = dispatch => (
    {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password)=> dispatch(emailSignInStart({ email, password }))
    }
)

export default connect(null, mapDispatchToProps)(SignIn);