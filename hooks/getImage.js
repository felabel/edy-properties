import { getDownloadURL, getStorage, ref } from 'firebase/storage'
import { useEffect, useState } from 'react';


const useGetImageURL = (img) => {

    const [error, setError] = useState({ error: false, message: "" });
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState("");


    useEffect(() => {
    const getimage = (setter)=>{
        const storage = getStorage()
        const imgRef = ref(storage, img);

        setLoading(true);
        getDownloadURL(imgRef).then((url) => {
            setter(url)
        }).catch((error) => setError({ error: true, message: error.message }))

        setLoading(false);
       }
       getimage((url)=>setData(url))
    }, [])
    return [data, loading, error];

}

export default useGetImageURL;