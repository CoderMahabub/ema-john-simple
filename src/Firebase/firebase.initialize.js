import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";


const firebaseInitializeApp = () => {
    initializeApp(firebaseConfig);
}
export default firebaseInitializeApp;