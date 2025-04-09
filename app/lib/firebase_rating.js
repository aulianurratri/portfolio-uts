import { database } from "../firebase_connection";
import { ref, push, onValue } from "firebase/database";

// Simpan rating ke Realtime Database
export const simpanRating = async ({ nama, rating, komentar }) => {
  const ratingRef = ref(database, "ratings");
  const data = {
    nama: nama || "Anonim",
    rating: parseInt(rating),
    komentar: komentar || "",
    timestamp: Date.now(),
  };
  await push(ratingRef, data);
};

// Ambil semua rating
export const ambilRating = (callback) => {
  const ratingRef = ref(database, "ratings");
  onValue(ratingRef, (snapshot) => {
    const data = snapshot.val();
    const list = data
      ? Object.entries(data).map(([id, value]) => ({
          id,
          ...value,
        }))
      : [];
    callback(list);
  });
};
