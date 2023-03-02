import InstagramLogo from './AppLogo/InstaLogo2.png';
import FacebookLogo from './AppLogo/Facebook-Logo.png';
import AppLogo from './AppLogo/app.png';
import GoogleLogo from './AppLogo/google.png'
import './App.css'
import { useState } from 'react';
import Validation from './Validation'
import {Link} from 'react-router-dom'


export default function Login() {

const [value,Setvalue] = useState({
  Username: '',
  Password: ''
})

const [error,Seterror] = useState([])


const onChange = (evt) => {
  Setvalue({
    ...value,
    [evt.target.name] : evt.target.value
  });
}
const Submit = (evt) => {
evt.preventDefault();
Seterror(Validation(value))
}
    return(
        <div className='General'>
          <div className='general1'>
            <div className='general2'>
              <img src={InstagramLogo} className='InstaLogo'/>
              {/* <div className='input_box'> */}
            <input type='text' placeholder='Phone number,username or Email' name='Username' value={value.Username} onChange={onChange}/>
          {/* </div> */}
          {
            error.Username && <p className='error'>{error.Username}</p>
          }
          {/* <div className='input_box'> */}
          <input type='password' placeholder='Password' name='Password' className='sss' value={value.Password} onChange={onChange} />
          {/* </div> */}
          {
          error.Password && <p className='error'>{error.Password}</p>
          }
          <div className='Login_button'>
            <button className='Login_button1' onClick={Submit}>Log in</button>
            </div>
            <div className='linesbox'>
              <div className='line1'></div>
              <div className='or box'>OR</div>
              <div className='line1'></div>
            </div>
            <div className='facebookbox'>
              <span>
                <img src={FacebookLogo} className='facebooklogo'/>
                </span>
                <p className='facebookbox2'>Log in with Facebook</p>
            </div>
            <div className='forgotbox'>
              <p className='forgotline'>Forgot password?</p>
            </div>
            </div>
          </div>
          <div className='General_2'>
            <div className='Sgn'>
            <p>Don't have an account? <Link className='Span' to='/Signup'>Sign Up</Link></p>
            </div>
          </div>
          <p className='get'>Get the App.</p>
          <div className='footers'>
           <img src={AppLogo} className='Applogo'/>
           <img src={GoogleLogo} className='Googlelogo'/>
           </div>
          </div>
    )
}