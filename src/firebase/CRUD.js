import {
  getDatabase,
  ref,
  child,
  get,
  onValue,
  push,
  set,
} from 'firebase/database';
import { initFirebase } from '../firebase/initFirebase';
import { dollarUS, dateKeyValue } from '../common/utilities';

initFirebase();

const db = getDatabase();
const dbRef = ref(db);

export async function createRegister(data, patch) {
  let status = false;
  let postRef = ref(db, `IO/${dateKeyValue()}`);
  let newPost = push(postRef);

  await set(newPost, data);
}

export async function getIO() {
  let list = [];
  let getRef = ref(db, `IO/${dateKeyValue()}`);

  try {
    await onValue(getRef, (snapshot) => {
      for (const item in snapshot.val()) {
        list.push(item);
      }
    })
  } catch (e) {
    console.error(e);
  }
  return list;
}

export async function getBalance() {
  let balance = 0;

  await get(child(dbRef, 'Balance'))
    .then((s) => {
      balance = s.val().Total;
    })
    .catch((e) => {
      console.error(e);
    });
  return dollarUS.format(balance);
}
