import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firestoreDB } from './config';

// create new Song and save it in firestore
export const createSong = (artist, song) => {
  // Organize the artist and song into an Object
  const newSong = {
    artist,
    song,
  };
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // Get the collections of snongs for the current user
      const songsCollection = firestoreDB.collection(`users/${user.uid}/songs`);

      // Add the song to a document in the songs collections and log the document id.
      songsCollection
        .add(newSong)
        .then((docReg) => console.log('Song document ID', docReg.id))
        .catch((err) =>
          console.log('There was an error while save song to firestore', err)
        );
    }
  });
};
