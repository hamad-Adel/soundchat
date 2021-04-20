import './firebase/config.js';
import { assignClick, initiakizeSigninButtons } from './utilities.js';
import {
  googleSignin,
  googleSignout,
  facebookSignin,
} from './firebase/firebaseAuth.js';

initiakizeSigninButtons();
assignClick('signin-google', googleSignin);
assignClick('appbar-signout-button', googleSignout);
assignClick('signin-facebook', facebookSignin);
assignClick('signin-twitter', () => console.log('Twitter'));
