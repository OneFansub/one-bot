import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  setDoc,
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

export async function saveAnime(anime: Anime) {
  const animesCol = collection(db, "anidb");
  return addDoc(animesCol, anime);
}

export async function updateAnime(animeId: string, anime: Anime) {
  const docRef = doc(db, "anidb", animeId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) setDoc(docRef, anime);
  else console.log(`Culdn't update, the anime id: ${animeId} was not found!`);
}

export async function deleteAnime(animeId: string) {
  const docRef = doc(db, "anidb", animeId);
  deleteDoc(docRef);
}
