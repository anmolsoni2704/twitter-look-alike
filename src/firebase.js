import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAm0r677NY_YED_Rji4UUUVh93DDpQ6dnI",
    authDomain: "twitter-clone-cec66.firebaseapp.com",
    projectId: "twitter-clone-cec66",
    storageBucket: "twitter-clone-cec66.appspot.com",
    messagingSenderId: "131703700126",
    appId: "1:131703700126:web:cfe0f796e4fe7d7504d98f"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);

const db=firebaseApp.firestore();

export default db;