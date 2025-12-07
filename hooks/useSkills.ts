import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";
import { Skill } from "../types/skill";

export function useSkills() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "skills"), (snap) => {
      const data: Skill[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Skill, "id">),
      }));

      setSkills(data);
    });

    return () => unsub();
  }, []);

  return skills;
}
