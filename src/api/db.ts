import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";
import { app } from "./firebase.js";
import { Anime } from "../models/anime.js";

export const db = getFirestore(app);

export async function getAnimes() {
  const animesCol = collection(db, "anidb");
  const animesSnapshot = await getDocs(animesCol);
  // const animeList = animesSnapshot.docs.map((doc) => doc.data());
  return animesSnapshot.docs;
}

export function getAnime(animeId: string) {
  const docRef = doc(db, "anidb", animeId);
  return getDoc(docRef);
}

export async function deleteAnime(animeId: string) {
  const docRef = doc(db, "anidb", animeId);
  deleteDoc(docRef);
}
