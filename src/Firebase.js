 import * as firebase from 'firebase';

 var config = {
  apiKey: "AIzaSyDeZkQBGdd7NAzhUkmc1rtN7WoPcqgc0Pg",
  authDomain: "musicon-face6.firebaseapp.com",
  databaseURL: "https://musicon-face6.firebaseio.com",
  projectId: "musicon-face6",
  storageBucket: "musicon-face6.appspot.com",
  messagingSenderId: "1039167301078"
};
firebase.initializeApp(config);

  export const database = firebase.database().ref('/posts');

