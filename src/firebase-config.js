import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseconfig  ={

    apiKey: "AIzaSyBERKC9QkJRu3osuYFPDyMwhVM_-b1TxmI",
    authDomain: "login-9c355.firebaseapp.com",
    projectId: "login-9c355",
    storageBucket: "login-9c355.appspot.com",
    messagingSenderId: "973757334231",
    appId: "1:973757334231:web:82e1a8eeb4cedcf76d2692",
    measurementId: "G-7GMPB32GTN"

}
const app = initializeApp(firebaseconfig)
export const auth = getAuth(app)