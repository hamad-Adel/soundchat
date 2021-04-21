import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB9A01NbWi0nu954lfncMfxjP6-PpQxIMM',
  authDomain: 'sound-chat-81290.firebaseapp.com',
  databaseURL: 'https://sound-chat-81290.firebaseio.com',
  projectId: 'sound-chat-81290',
  storageBucket: 'sound-chat-81290.appspot.com',
  messagingSenderId: '1009198030666',
  appId: '1:1009198030666:web:232435f9c0eeb9856d2bb3',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const firestoreDB = firebase.firestore();
