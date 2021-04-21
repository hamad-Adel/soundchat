import './firebase/config.js';
import { assignClick, initiakizeSigninButtons } from './utilities.js';
import {
  googleSignin,
  signOut,
  facebookSignin,
  signIn,
  register,
} from './firebase/firebaseAuth.js';

initiakizeSigninButtons();
assignClick('signin-google', googleSignin);
assignClick('appbar-signout-button', signOut);
assignClick('signin-facebook', facebookSignin);
// assignClick('signin-twitter', () => console.log('Twitter'));

// sign in with email and password function
const signinForm = document.getElementById('signin');
if (signinForm) {
  console.log(signinForm);
  signinForm.onsubmit = (event) => {
    event.preventDefault();
    const email = event.target['email-input'].value,
      password = event.target['password-input'].value;
    signIn(email, password);
  };
}

// Register;
const registerForm = document.getElementById('register');
if (registerForm) {
  console.log(registerForm);
  registerForm.onsubmit = (event) => {
    event.preventDefault();
    const email = event.target['email-input'].value,
      password = event.target['password-input'].value;
    register(email, password);
  };
}
