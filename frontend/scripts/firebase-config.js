const firebaseConfig = {
  apiKey: "AIzaSyAqrJmeWFgdZZU0X8u9Z4wf4Borz1vUtDg",
  authDomain: "miningpool-bd0f8.firebaseapp.com",
  projectId: "miningpool-bd0f8",
  storageBucket: "miningpool-bd0f8.appspot.com",
  messagingSenderId: "982729141280",
  appId: "1:982729141280:web:a442e7122a8f4e60666045",
  measurementId: "G-CNL8DZY9LN"
};

// Initialize Firebase globally
firebase.initializeApp(firebaseConfig);

// Export auth and db for global use
const auth = firebase.auth();
const db = firebase.firestore();

export { auth, db };