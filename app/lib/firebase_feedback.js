// app/lib/firebase_feedback.js
import { database } from "../firebase_connection";
import { ref, push, onValue } from "firebase/database";

// Fungsi untuk menyimpan feedback
export function simpanFeedback(data) {
  const feedbackRef = ref(database, "feedbacks");
  return push(feedbackRef, {
    ...data,
    timestamp: Date.now(),
  });
}

// Fungsi untuk mengambil data feedback secara realtime
export function ambilFeedback(callback) {
  const feedbackRef = ref(database, "feedbacks");
  onValue(feedbackRef, (snapshot) => {
    const data = snapshot.val();
    const list = data ? Object.entries(data).map(([id, val]) => ({ id, ...val })) : [];
    callback(list);
  });
}
