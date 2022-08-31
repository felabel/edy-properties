// import db from "../firebase";
// import { useState, useEffect } from "react";
// import { collection, getDocs } from 'firebase/firestore';

// import React from 'react'

// const PropertyData = () => {
//     const [products, setProducts] = useState([]);
//     const fetchData = async() =>{
//         const response = db.collection('products');
//         const data = await response.get();
//         data.docs.forEach(item => {
//             setProperties([...products, item.data()])
            
//         });
//     }

//     useEffect(() => {
//         fetchData();
//     console.log({products})
//     console.log('hello there')

//     }, [products])
//   return (
//     <div>
//         {
//             products && products.map(products =>{
//                 return(
//                     <div className="text-white bg red w-full h-44" key={products.id}>
//                         hello there
//                         <h4>{products.name}</h4>
//                         <h4>{products.price}</h4>
//                     </div>
//                 )
//             })
//         }
//     </div>
//   )
// }

// export default PropertyData