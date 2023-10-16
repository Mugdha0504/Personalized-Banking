import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkTWtS3y5YOMwJSSs08iQ4XL276-MdquM",
    authDomain: "rialto-1368c.firebaseapp.com",
    projectId: "rialto-1368c",
    storageBucket: "rialto-1368c.appspot.com",
    messagingSenderId: "344080706548",
    appId: "1:344080706548:web:cd69f90127d0e4a69267a1",
    measurementId: "G-T9DHRCSMJ4"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)