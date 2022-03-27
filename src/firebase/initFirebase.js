import firebase, { initializeApp, getApps } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD5ayX0tpRl8DaLWr10NHpOg-eAxVKs8AQ',
  authDomain: 'io-money.firebaseapp.com',
  databaseURL: 'https://io-money-default-rtdb.firebaseio.com',
  projectId: 'io-money',
  storageBucket: 'io-money.appspot.com',
  messagingSenderId: '667598504581',
  appId: '1:667598504581:web:c982ef8d8a166f47109fec',
  measurementId: 'G-2CCN949DJJ',
};

export const  initFirebase=()=>{
  if(!getApps.length){
    initializeApp(firebaseConfig);
  }

}

//const auth=fire.auth()
/*get(child(rtdb,"menu")).then((snap)=>{
   console.log(snap.val());
 }).catch((e)=>{console.error(e);})*/


