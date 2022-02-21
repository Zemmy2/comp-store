import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBUMTZB9oQcG6xnjqCpx1PWc3PsL16i_gs',
  authDomain: 'comp-store-c5ec0.firebaseapp.com',
  projectId: 'comp-store-c5ec0',
  storageBucket: 'comp-store-c5ec0.appspot.com',
  messagingSenderId: '758128881753',
  appId: '1:758128881753:web:d65fb32288bafc84bc0148',
};

const app = initializeApp(firebaseConfig);

export default app;
