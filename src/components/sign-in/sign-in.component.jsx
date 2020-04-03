import './sign-in.style.scss';
import React, {Component} from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {signInWithGoogle} from "../../firebase/firebase.utils";


class SingIn extends Component{
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = event => {
         const {name, value} = event.target;
         this.setState({[name]: value});
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    };

    render() {
        const {email, password} = this.state;
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email"
                           name="email"
                           value={email}
                           required
                           label='Email'
                           handleChange={this.handleChange}/>
                    <FormInput type="password"
                           name="password"
                           value={password}
                           required
                           label='Password'
                           handleChange={this.handleChange}/>
                     <div className="buttons">
                         <CustomButton type="submit">Sign In</CustomButton>
                         <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                     </div>
                </form>
            </div>
        )
    }

};
export default SingIn;