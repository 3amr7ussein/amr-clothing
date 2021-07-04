import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {SignInWithGoogle} from '../../firebase/firebase.utils'


class SignIn extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = event=>{
        event.preventDefault();
        this.setState({email:'',password:''})
    }

    handleChange = event=>{
        const {value,name} = event.target;
        this.setState({[name]: [value]});
    }
    render(){
        return (
        <div className='sign-in'>
            <h1>I ALready have account</h1>
            <span>Sign in With your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email'
                    label="Email"
                    type='email'
                    value={this.state.email} 
                    required
                    handleChange={this.handleChange}
                    />
               
                <FormInput name='password' 
                    value={this.state.password} 
                    type='password' 
                    required 
                    label='Password'
                    handleChange={this.handleChange}
                    />
                <div className='buttons'>
                    <CustomButton type='submit' >Sign in</CustomButton>
                    <CustomButton onClick={SignInWithGoogle} isGoogleSignIn >Sign in with google</CustomButton>
                </div>
            </form>
        </div>)
    }
}


export default SignIn;