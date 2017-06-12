import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyC55HM00K_blD9yId_1S8GOHm7ZAZinc4E',
  authDomain: 'react-todo-app-25306.firebaseapp.com',
  databaseURL: 'https://react-todo-app-25306.firebaseio.com',
  projectId: 'react-todo-app-25306',
  storageBucket: 'react-todo-app-25306.appspot.com',
  messagingSenderId: '731074617476'
};
firebase.initializeApp(config);

let firebaseRef = firebase.database().ref();

firebaseRef.set({
  appName: 'Todo App',
  isRunning: true,
  user: {
    name: 'Steven',
    age: 29
  }
});

firebaseRef.set({})
