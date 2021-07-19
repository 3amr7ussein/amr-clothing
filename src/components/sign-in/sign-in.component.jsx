import React, { Component } from 'react';

import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';
class SignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart(email, password);
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({ email: '', password: '' })
        // }
        // catch (error) {
        //     console.log(error);
        // }

    };

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }
    render() {
        const { email, password } = this.state;
        const { googleSignInStart } = this.props;
        return (

            <div className='sign-in'>
                <h1 className='title'>I ALready have account</h1>
                <span>Sign in With your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required />

                    <FormInput name='password'
                        value={password}
                        type='password'
                        required
                        label='Password'
                        handleChange={this.handleChange}
                    />
                    <div className='buttons'>
                        <CustomButton type='submit' >Sign in</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn >Sign in with google</CustomButton>
                    </div>
                </form>
            </div>)
    }
}

const mapDispatchToProps = dispatch => (
    {
        googleSignInStart: () => dispatch(googleSignInStart()),
        emailSignInStart: (email, password)=> dispatch(emailSignInStart({ email, password }))
    }
)

export default connect(null, mapDispatchToProps)(SignIn);