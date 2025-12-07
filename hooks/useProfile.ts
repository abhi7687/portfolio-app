import {doc, onSnapshot } from "firebase/firestore";
import { db } from "@/services/firebase";
import { useState, useEffect } from "react";
import { Profile } from "@/types/profile";

export function useProfile() {
    const [profile, setProfile] = useState<Profile | null>(null);

    useEffect(() => {
        const unsub = onSnapshot(doc(db, "profile", "main"),(snap) => {
            setProfile(snap.data() as Profile);
        });

        return () => unsub();
    }, []);

    return profile;
}