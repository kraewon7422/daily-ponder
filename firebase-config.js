// Firebase web config for "Sign in with Google" + sync.
// (Firebase console → Project settings → Your apps → Web app → SDK setup → Config.)
// These values are public identifiers, not secrets; access is protected by Firestore rules
// (each signed-in user can only read/write users/{their uid}/...).
// Set to null to use the app without login (entries stay on this device).
export const firebaseConfig = {
  apiKey: 'AIzaSyBsoEwHbJjVdY0GroNMssFxTOEnvy-VWgM',
  authDomain: 'daily-ponder.firebaseapp.com',
  projectId: 'daily-ponder',
  storageBucket: 'daily-ponder.firebasestorage.app',
  messagingSenderId: '31455537420',
  appId: '1:31455537420:web:ebe64ca341bc937e2c4129',
};
