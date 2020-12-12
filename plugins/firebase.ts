import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyC7bK4uk4WrZB3SYIjDBHKeosxX9DhFZ9M",
    authDomain: "monju-5df38.firebaseapp.com",
    databaseURL: "https://monju-5df38-default-rtdb.firebaseio.com",
    projectId: "monju-5df38",
    storageBucket: "monju-5df38.appspot.com",
    messagingSenderId: "869049593617",
    appId: "1:869049593617:web:8f3701c0aee5e26dcb26b0"
  })
}

export default firebase
