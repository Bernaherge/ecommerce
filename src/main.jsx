import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyAuLfOLWVkMXGMrf9Hj6XkM5sPv811sfx4",
  authDomain: "ecommerce-6655b.firebaseapp.com",
  projectId: "ecommerce-6655b",
  storageBucket: "ecommerce-6655b.appspot.com",
  messagingSenderId: "628125001910",
  appId: "1:628125001910:web:7f6340c4228acc84609e17",
  measurementId: "G-VSX1SWP5J3"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>,
);
