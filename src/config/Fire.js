import firebase from 'firebase';

const config = {

  apiKey: 'AIzaSyD8VPQuJqLMzJltH48IbSnxDJcOINffwKk',
  authDomain: 'myapp-e5590.firebaseapp.com',
  databaseURL: 'https://myapp-e5590.firebaseio.com',
  projectId: 'myapp-e5590',
  storageBucket: 'myapp-e5590.appspot.com',
  messagingSenderId: '541831195286',
};
const fire = firebase.initializeApp(config);
export default fire;
