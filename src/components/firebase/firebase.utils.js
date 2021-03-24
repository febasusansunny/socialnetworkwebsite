import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA12-ksdTrnUA435yGU7KtsAM8Ic1Ki19Y",
  authDomain: "socialnetworkwebsite-f25ab.firebaseapp.com",
  projectId: "socialnetworkwebsite-f25ab",
  storageBucket: "socialnetworkwebsite-f25ab.appspot.com",
  messagingSenderId: "744824846984",
  appId: "1:744824846984:web:f3960ebab8fe7c453f3d3d",
  measurementId: "G-HBJ7QM4Z7H"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
const providers = new firebase.auth.FacebookAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export const signInWithFacebook = () => auth.signInWithPopup(providers);

export default firebase;
