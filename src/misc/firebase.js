import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyClZzJu0rt4JW7BTvzsVLuanE3uYBGCljM",
    authDomain: "chat-web-app-794e2.firebaseapp.com",
    projectId: "chat-web-app-794e2",
    storageBucket: "chat-web-app-794e2.appspot.com",
    messagingSenderId: "588256379917",
    appId: "1:588256379917:web:c6bb656be528a5f1644144"
  };


const app= firebase.initializeApp(config);
export const auth = app.auth();
