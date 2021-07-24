import React ,{useState} from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.actions'
const SignUp =({signUpStart})=> {
  

       const [userCredentials,setUserCredentials] =  useState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        })

        const { password, confirmPassword,displayName,email } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        
        if (password !== confirmPassword) {
            alert('password does not match')
            return
        }
        
        signUpStart(userCredentials);
        // try {
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);

        //     await createUserProfileDocument(user, {displayName});
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     })
        // }
        // catch (e) {
        //     console.error(e)
        // }
    };

   const  handleChange = event => {
        const { name, value } = event.target;
        setUserCredentials({...userCredentials, [name]: value });
    }
        return (
            <div className='sign-up'>
                <h1 className='title'>I don't have an account</h1>
                <span>sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={handleSubmit}>
                    <FormInput type='text'
                        name='displayName'
                        value={displayName}
                        onChange={handleChange}
                        label='Display Name'
                        required />

                    <FormInput type='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        label='Email'
                        required />

                    <FormInput type='password'
                        name='password'
                        value={password}
                        onChange={handleChange}
                        label='Password'
                        required />

                    <FormInput type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={handleChange}
                        label='Confirm Password'
                        required />
                    <CustomButton type='submit'>Sign up</CustomButton>
                </form>
            </div>
        )
    }
const mapDispatchToProps = dispatch=>({
    signUpStart:(user)=>dispatch(signUpStart(user)),
}
)
export default connect(null,mapDispatchToProps)(SignUp);