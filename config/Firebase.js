import firebase from 'firebase';
// import firebase from 'react-native-firebase'; 

const firebaseConfig = {
    apiKey: 'AIzaSyBw-_a0A6759yMrjKEoOiHBJWmpbX-L4qs',
    authDomain: 'twoproject-13d05.firebaseapp.com',
    databaseURL: 'https://twoproject-13d05.firebaseio.com',
    projectId: 'twoproject-13d05',
    storageBucket: 'twoproject-13d05.appspot.com',
    messagingSenderId: '668546493119',
    appId: '1:668546493119:web:23a74c5d742539d945b40a'
}
// Initialize Firebase
const Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase;    