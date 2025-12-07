import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/services/firebase";
import { useState, useEffect } from "react";
import { Experience } from "@/types/experience";

export function useExperience() {
  const [experience, setExperience] = useState<Experience[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "experience"), (snap) => {
      const data: Experience[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Experience, "id">),
      }));

      setExperience(data);
    });

    return () => unsub();
  }, []);

  return experience;
}