import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';

import db from '../../firebase';
import axios from 'axios';


const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')

    const colRef = collection(db, 'contact');

    const handleSubmit = (e) => {
        e.preventDefault();

        axios({
            method: "POST",
            url:"/send",
            data: details
        }).then((response)=>{
            if (response.data.status === 'success'){
                alert("Message Sent."); 
                
            }else if(response.data.status === 'fail'){
                alert("Message failed to send.")
            }
          })
     
        let details = {
            name:name,
            email:email,
            phoneNumber:phoneNumber,
            message:message
        }
        addDoc(colRef, {
            details
        })
        .then(() => {
            // document.location='/'
        e.preventDefault();

        })
        .catch((error) => {
            alert(error.message)
        });
        setName('')
        setEmail('')
        setPhoneNumber('')
        setMessage('')


    }
  return (
    <div id='contact' className="w-full contact  primary-bg bg-[url('/images/Subtract.png')] bg-no-repeat bg-cover mt-8" >
        <div className="overlay w-full z-1 overlay absolute">
            <div className=" w-full  absolute  text-white blur-ab"></div>

            <div className="contact px-8 md:w-4/5 mx-auto md:flex justify-between">
                <div className="text text-white mt-16 md:mt-56  md:w-3/5">
                    <p className='text-4xl md:text-6xl font-semibold ab-header'>Did You Find Your <br></br><span className='text-brand'>Dream Home?</span></p>
                    <p className='text-2xl font-thin ab-small hidden md:block'>Thank you for getting in touch! if <br></br> you find your dream home connect <br></br> with us</p>
                    <p className='md:hidden text-2xl font-thin ab-small'>Thank you for getting in touch! if ou find your dream home connect with us</p>
                </div>
                    <div className="form mt-8 md:mt-56 md:w-1/2">
                        <form className='form' onSubmit={handleSubmit}>
                            <input type="text" name="name" id="" placeholder='Your name' 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input type="text" name="email" id="" placeholder='Your Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input type="text" name="phoneNumber" id="" placeholder='Phone Number'
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                            
                            <textarea name="message" id="" cols="58" rows="1" placeholder='message'
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <button type='submit' className='btn block px-8 py-2 mt-14 md:mt-16 font-semibold'>Submit</button>

                        </form>
                        
                    </div>  
                

            </div>
            {/* <div className="overlay w-full z-2 absolute  text-white blur-ab-down"></div> */}
        </div>
        
        

    </div>
  )
}

export default Contact