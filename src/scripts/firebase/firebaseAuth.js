import firebase from 'firebase/app';
import 'firebase/auth';

// Signin function with Google
export const googleSignin = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => console.log(result.user.displayName))
    .catch((error) =>
      console.error('There was an error when sigining in with Google', error)
    );
};
// Sign out function with Google
export const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => console.log('User Successfully signed out'))
    .catch((error) =>
      console.log('There was an error when signing out', error)
    );
};
// Facebook Signin function
export const facebookSignin = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => console.log(result.user.displayName))
    .catch((err) =>
      console.log('There was an error when signing in wiht Facebook', err)
    );
};

// Sgin in with email and password
export const signIn = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => console.log('User successfully signed in'))
    .catch((err) =>
      console.log('There was an error while sign in with eamil and password')
    );
};

// Register
export const register = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => console.log('successfully registered'))
    .catch((err) => console.log('Error while register'));
};
