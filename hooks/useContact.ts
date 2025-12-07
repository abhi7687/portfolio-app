import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../services/firebase";
import { useEffect, useState } from "react";
import { Contact } from "../types/contact";

export function useContact() {
  const [contact, setContact] = useState<Contact | null>(null);

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "contact", "contact"), (snap) => {
        setContact(snap.data() as Contact);
    });

    return () => unsub();
  }, []);

  return contact;
}
