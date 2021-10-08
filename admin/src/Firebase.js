import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAahtOkhyo10liw_pvUmNp8xnk0aFNOGOg",
    authDomain: "netflix-7bae1.firebaseapp.com",
    projectId: "netflix-7bae1",
    storageBucket: "netflix-7bae1.appspot.com",
    messagingSenderId: "886740983842",
    appId: "1:886740983842:web:dda6a97fdf9c31a89d6a7b",
    measurementId: "G-5Z429ZM4SR"
};

const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

export default (storage);