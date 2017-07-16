import Firebase from 'firebase';

const firebaseApp = Firebase.initializeApp({
    apiKey: '',
    authDomain: '',
    databaseURL: '',
    projectId: '',
    storageBucket: '',
    messagingSenderId: ''
});

export const db = firebaseApp.database();
