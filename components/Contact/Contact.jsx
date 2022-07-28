import React from 'react'

const Contact = () => {
  return (
    <div className="w-full   primary-bg bg-[url('/images/Subtract.png')] bg-no-repeat bg-cover mt-8" >
        <div className="overlay w-full z-1 overlay absolute">
            <div className=" w-full  absolute  text-white blur-ab"></div>

            <div className="contact w-4/5 mx-auto flex justify-between">
                <div className="text text-white mt-56  w-3/5">
                    <p className='text-6xl font-semibold ab-header'>Did You Find Your <br></br><span className='text-brand'>Dream Home?</span></p>
                    <p className='text-2xl font-thin ab-small'>Thank you for getting in touch! if <br></br> you find your dream home connect <br></br> with us</p>
                </div>
                <div className="form mt-56  justify-between ml-6  w-1/2">
                    <input type="text" name="" id="" placeholder='Your name'/>
                    <input type="text" name="" id="" placeholder='Your Email'/>
                    <input type="text" name="" id="" placeholder='Phone Number'/>
                    <select name="" id="">
                        <option value="">flat</option>
                        <option value="">self con</option>
                    </select>
                    <textarea name="" id="" cols="58" rows="1" placeholder='message'></textarea>
                    <button type='submit' className='btn px-8 py-2 mt-16 font-semibold'>Submit</button>

                </div>

            </div>
            {/* <div className="overlay w-full z-2 absolute  text-white blur-ab-down"></div> */}
        </div>
        
        

    </div>
  )
}

export default Contact