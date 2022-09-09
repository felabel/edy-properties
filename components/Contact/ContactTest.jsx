import React, { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore';

import db from '../../firebase';
import axios from 'axios';



const ContactTest = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const [error, setError] = useState(false);

    const [contactForm, setContactForm] = useState({
        name: {
            value: '',
            elementConfig: {
              required: true,
              id: 'standard-basic',
              label: 'Your Name',
            },
            validation: {
              required: true,
              errorMessage: 'Please, enter your name',
            },
            valid: false,
            blur: false,
          },
      
          email: {
            value: '',
            elementConfig: {
              required: true,
              id: 'standard-basic',
              label: 'Your Email',
            },
            validation: {
              required: true,
              isEmail: true,
              errorMessage: 'Please, enter your email',
            },
            valid: false,
            blur: false,
          },
          
          phoneNumber: {
            value: '',
            elementConfig: {
              required: true,
              id: 'standard-basic',
              label: 'Your Phone Number',
            },
            validation: {
              required: true,
              isEmail: true,
              errorMessage: 'Please, enter your email',
            },
            valid: false,
            blur: false,
          },
      
          message: {
            value: '',
            elementConfig: {
              required: true,
              id: 'standard-multiline-static',
              label: 'Your Message',
              multiline: true,
              rows: 4,
            },
            validation: {
              required: true,
              errorMessage: 'Please, enter your message',
            },
            valid: false,
            blur: false,
          },

         
      
    });
    //convert the `contactForm` object into an array
    const formElementsArray = [];
    for (let key in contactForm) {
        formElementsArray.push({
        id: key,
        ...contactForm[key],
        });
    }
    //map the array to return an array of JSX elements
  const formElements = formElementsArray.map((element) => {
    return (
      <div key={element.id}>
        <input type='text'
            {...element.elementConfig}
            error={!element.valid && element.blur}
            helperText={
                !element.valid && element.blur
                ? element.validation.errorMessage
                : null
            }
            onChange={(event) => inputChangedHandler(event, element.id)}
            onBlur={(event) => inputChangedHandler(event, element.id)}
            value={element.value}
            placeholder={element.elementConfig.label}
            >

        </input>
      </div>
    );
  });

  
  //this function runs when an input changes or is blurred
  const inputChangedHandler = (event, inputIdentifier) => {
    //create a new object representing the input that was changed or blurred
    const updatedFormElement = {
      ...contactForm[inputIdentifier],
      value: event.target.value,
      valid: checkValidity(
        event.target.value,
        contactForm[inputIdentifier].validation
      ),
      blur: event.type == 'blur' ? true : false,
      touched: true,
    };

    //create a new object represeting the whole form object
    const updatedContactForm = {
      ...contactForm,
      [inputIdentifier]: updatedFormElement,
    };

    //the whole form is valid until it's not
    let formIsValid = true;
    for (let inputElementIdentifier in updatedContactForm) {
      formIsValid =
        updatedContactForm[inputElementIdentifier].valid && formIsValid;
    }

    //update `contactForm` state
    setContactForm(updatedContactForm);

    //update `formIsValid` state
    setFormIsValid(formIsValid);
  };
  const checkValidity = (value, rules) => {
    //it's always true until there's one false in the way
    let isValid = true;
    if (rules.required) {
      //value.trim() gets rid of white spaces
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.isEmail) {
      //the `pattern` constant is a Regular Expression that matches the shape of an email
      const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      //`pattern.test()` returns true or false
      isValid = pattern.test(value) && isValid;
    }

    return isValid;
  };
  //this function is called when clicking the `Send` button
  const submitForm = () => {
    //if a bot filled the honeypot field, don't keep running code (e.g don't call a cloud function)
    e.preventDefault()
   alert(element.elementConfig.value)
   alert('submitted')

    

    //this fake cloud function consoles log the data from the form that is passed to it, and has a 50% chance of resolving.
    const fakeCloudFunction = (data) => {
      console.log(data);
      return new Promise((resolve, reject) => {
        const error = Math.random() > 0.5 ? true : false;
        setTimeout(() => {
          if (!error) {
            resolve();
          } else {
            reject();
          }
        }, 1000);
      });
    };
     //call the fake cloud function. Later on, this function will be replaced by the real cloud function.
     fakeCloudFunction({
        name: contactForm.name.value,
        email: contactForm.email.value,
        phoneNumber: contactForm.phoneNumber.value,
        message: contactForm.message.value,
      })
        //the code inside the `then()` block runs when the message was successfully sent from inside the cloud function
        .then(() => {
          //create a new `contactForm` object that looks like the original `contactForm` state
          let originalContactForm = {};
          for (let key in contactForm) {
            originalContactForm[key] = {
              ...contactForm[key],
              value: '',
              valid: key == 'honeypot' ? true : false,
              blur: false,
            };
          }
  
          //reset `contactForm` state to its original value
          setContactForm(originalContactForm);
  
          //reset the whole form validity to false
          setFormIsValid(false);
  
          //set `error` state to false.
          setError(false);
  
  
         
        })
        //this code below runs when the message was NOT successfully sent from inside of the cloud function
        .catch(() => {
          //set `error` state to true
          setError(true);
  
         
        });
    };



    





    
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
                        <form className='form' onSubmit={submitForm}>
                            {formElements}
                            <button type='submit' className='btn block px-8 py-2  font-semibold'
                              onClick={submitForm}
                            >Submit</button>

                        </form>
                        
                    </div>  
                

            </div>
            {/* <div className="overlay w-full z-2 absolute  text-white blur-ab-down"></div> */}
        </div>
        
        

    </div>
  )
}

export default ContactTest