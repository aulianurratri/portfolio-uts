// app/lib/firebase_comments.js
import { database } from "../firebase_connection";
import { ref, push, onValue } from "firebase/database";

// Menambahkan komentar ke Firebase
export const addComment = (data) => {
  const commentRef = ref(database, "comments");
  return push(commentRef, data);
};

// Mengambil komentar secara realtime
export const listenComments = (callback) => {
  const commentRef = ref(database, "comments");
  onValue(commentRef, (snapshot) => {
    const comments = [];
    snapshot.forEach((childSnapshot) => {
      comments.push({
        id: childSnapshot.key,
        ...childSnapshot.val(),
      });
    });
    callback(comments);
  });
};
