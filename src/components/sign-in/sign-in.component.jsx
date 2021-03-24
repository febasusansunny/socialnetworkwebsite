import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';


import { auth, signInWithGoogle,signInWithFacebook} from '../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
  
     const { email, password } = this.state;
  
     try {
      await auth.signInWithEmailAndPassword(email, password);
       this.setState({ email: '', password: '' });
     } catch (error) {
       console.log(error);
     }
    };
  
     handleChange = event => {
     const { value, name } = event.target;
  
      this.setState({ [name]: value });
     };
  
  render() {
    
    return (
      <div className='sign-in'>
      
      <h1>Sign In</h1>

        <form onSubmit={this.handleSubmit}>
          <FormInput
          
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='Username or Email'
            required
          />
          <FormInput

            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />
            {/* <Link to='/homePage' className='button' > 
            Sign in
          </Link>  */}
          <div className='buttons'>
            <CustomButton type='submit' >
              <Link to='/homePage' className='button'> 
               Sign in
              </Link>
            </CustomButton>
            </div> 
            <br/>
            <div className='buttons'>
           <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton> 
            </div>
            <br/>
            <div className='buttons'>
            <CustomButton  onClick={signInWithFacebook} isFacebookSignIn>
              Sign in with Facebook
            </CustomButton> 
          </div>
        </form>
        <br/>
        <span>Don't have an account? Please <Link to='/signup'>Sign Up</Link></span>
      </div>
    );
  }
}

export default SignIn;
