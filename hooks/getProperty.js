import { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';
import db from '../firebase';


export default function useGetProperty(id) {
    const [property, setProperty] = useState({});

        const fetch = async () => {
            const ref = doc(db, "products", id)
            const docSnap = await getDoc(ref);
            setProperty(docSnap.data());
        }
    useEffect(() => {
        fetch()
    }, [])
    return property;
}