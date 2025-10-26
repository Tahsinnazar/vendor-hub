import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Using a mock configuration for development
const firebaseConfig = {
  apiKey: "AIzaSyBmock-key-for-development-only",
  authDomain: "vendor-management-demo.firebaseapp.com",
  projectId: "vendor-management-demo",
  storageBucket: "vendor-management-demo.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890",
  measurementId: "G-ABCDEFGHIJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
