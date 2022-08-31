import { useState, useEffect } from "react";
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase';

export default function useGetProperties() {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        (async () => {
            const colRef = collection(db, 'products');

            const snapshots = await getDocs(colRef)

            const docs = snapshots.docs.map((doc) => {
                const property = doc.data()
                property.id = doc.id
                return property
            }
            )
            setProperties(docs)
        })()
    }, [])

    return properties;
}