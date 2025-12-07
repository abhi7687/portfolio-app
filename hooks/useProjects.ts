import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";
import { Project } from "../types/project";

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "projects"), (snap) => {
      const data: Project[] = snap.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<Project, "id">),
      }));

      setProjects(data);
    });

    return () => unsub();
  }, []);

  return projects;
}
