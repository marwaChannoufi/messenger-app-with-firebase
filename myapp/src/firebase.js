import firebase from 'firebase'

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAx55n9Tk0Ls8ybKGYc8mkqZKv6TmHzXXY",
  authDomain: "messenger-app-fa30e.firebaseapp.com",
  databaseURL: "https://messenger-app-fa30e.firebaseio.com",
  projectId: "messenger-app-fa30e",
  storageBucket: "messenger-app-fa30e.appspot.com",
  messagingSenderId: "116248933575",
  appId: "1:116248933575:web:dd7fc38ecd6c7042b1fae2",
  measurementId: "G-Y92VN7Q9T6"

})
const db=firebaseApp.firestore()

export default db