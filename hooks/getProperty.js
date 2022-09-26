import { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';
import { useRouter } from "next/router";



export default function useGetProperty(id) {
    const [property, setProperty] = useState({});

        const fetch = async () => {
            const ref = doc(db, "properties", id)
            const docSnap = await getDoc(ref);
            setProperty(docSnap.data());
        }
    useEffect(() => {
       id && fetch()
    }, [id])
    return property;
}