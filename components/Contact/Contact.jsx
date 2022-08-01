import React from 'react'

const Contact = () => {
  return (
    <div ClassNameName="w-full contact  primary-bg bg-[url('/images/Subtract.png')] bg-no-repeat bg-cover mt-8" >
        <div ClassNameName="overlay w-full z-1 overlay absolute">
            <div ClassNameName=" w-full  absolute  text-white blur-ab"></div>

            <div ClassNameName="contact px-8 md:w-4/5 mx-auto md:flex justify-between">
                <div ClassNameName="text text-white mt-16 md:mt-56  md:w-3/5">
                    <p ClassNameName='text-4xl md:text-6xl font-semibold ab-header'>Did You Find Your <br></br><span ClassNameName='text-brand'>Dream Home?</span></p>
                    <p ClassNameName='text-2xl font-thin ab-small hidden md:block'>Thank you for getting in touch! if <br></br> you find your dream home connect <br></br> with us</p>
                    <p ClassNameName='md:hidden text-2xl font-thin ab-small'>Thank you for getting in touch! if ou find your dream home connect with us</p>
                </div>
                <div ClassNameName="form mt-8 md:mt-56   md:ml-6  md:w-1/2">
                    <input type="text" name="" id="" placeholder='Your name'/>
                    <input type="text" name="" id="" placeholder='Your Email'/>
                    <input type="text" name="" id="" placeholder='Phone Number'/>
                    <select name="" id="">
                        <option value="">flat</option>
                        <option value="">self con</option>
                    </select>
                    <textarea name="" id="" cols="58" rows="1" placeholder='message'></textarea>
                    <button type='submit' ClassNameName='btn block px-8 py-2 mt-14 md:mt-16 font-semibold'>Submit</button>

                </div>

            </div>
            {/* <div ClassNameName="overlay w-full z-2 absolute  text-white blur-ab-down"></div> */}
        </div>
        
        

    </div>
  )
}

export default Contact