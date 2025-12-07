import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";
import { Education } from "../types/education";

export function useEducation() {
  const [education, setEducation] = useState<Education[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "education"), (snap) => {
      const data: Education[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Education, "id">),
      }));

      setEducation(data);
    });

    return () => unsub();
  }, []);

  return education;
}
