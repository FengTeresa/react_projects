import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB3B22XCD8Mdt1QpXqdFfMdiJZSbioVTSE",
    authDomain: "dentic-c5e1e.firebaseapp.com",
    databaseURL: "https://dentic-c5e1e.firebaseio.com",
    projectId: "dentic-c5e1e",
    storageBucket: "dentic-c5e1e.appspot.com",
    messagingSenderId: "857631106752"
  };
var fire = firebase.initializeApp(config);
export default fire;
