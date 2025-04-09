// app/lib/firebase_connection.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAHqt-L0m632Bul0-xA1QGkjAUMJFFUtK0",
    authDomain: "portfolio-aulia.firebaseapp.com",
    databaseURL: "https://portfolio-aulia-default-rtdb.firebaseio.com",
    projectId: "portfolio-aulia",
    storageBucket: "portfolio-aulia.firebasestorage.app",
    messagingSenderId: "1058099416114",
    appId: "1:1058099416114:web:a1b0244ba00e96e796802b",
    measurementId: "G-WJYBJGWE84"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
