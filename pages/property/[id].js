import React from 'react'
import { useRouter } from 'next/router';

const Property = () => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>Property {id}</div>
    )
}
export default Property