
import './App.css';
import React, { useRef } from "react"
import emailjs from "@emailjs/browser";
import { useState, useMemo } from 'react'
import Select from 'react-select'
import countryList from 'react-select-country-list';
// import PhoneInput from 'react-phone-number-input';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import toast, { Toaster } from 'react-hot-toast';



// import { Link, Navigate } from "react-router-dom";


  

function App() {
    const form = useRef();
    const notify = () => toast('Here is your toast.');

    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), []);
    const [phone, setPhone] = useState('');
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    // const [country, setCountry] = useState("")
    const [pMeeting, setPMeeting] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [pmp, setPmp] = useState("")
    const [favCeleb, setFavCeleb] = useState("")
    const [message, setMessage] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    setName("")
    setEmail("")
    setPmp("")
    setPMeeting("")
    setPhone("")
    setFavCeleb("")
    setMessage("")

    emailjs
      .sendForm('service_vjlj9mg', 'template_aowzmc2', form.current, {
        publicKey: 'qeQ4A_o-diG7-IV5H',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  
  // <header>
      
  //     <nav className="flex items-center gap-8 justify-between mt-4 text-gray-500 font-semibold">
          
  //         <a href="/" className="text-primary ml-3 font-semibold text-5xl">Tom</a>
  //         <div className="flex gap-8 items-center mr-3 justify-end">
  //         {/* <a href={"/"}><h1></h1>Home</a> */}
  //         <a href=''>Home</a>
  //         <a href={""}>Menu</a>
  //         <a href={""}>About</a>
  //         <a href={""}>Contact</a>
  //         </div>
  //     </nav>
      
  //   </header>

  const changeHandler = value => {
    setValue(value)
    
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    

  }
  return (
  <div>
    
    
    {/* <div className='mt-4'>
    <img src={Image} className="m-auto  h-screen w-100 rounded-2xl"/>
    </div>
    <div>
    </div> */}
    <div className='bg-gray-200'>
    <h1 className='p-3 m-3 text-2xl font-bold text-center text-primary '>Celebrity Encouter</h1>
    </div>
    
    <form className='my-5 bg-gray-100' ref={form} onSubmit={sendEmail}>
    <div>
      <label>Name <span className='text-primary'>*</span></label>
      <input type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
    </div>
      <div className='mt-4'>
      <label  className='pt-5'>Email <span className='text-primary'>*</span></label>
      <input type='email' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='mt-4'>
      <label >Country <span className='text-primary'>*</span></label>
      <Select name='country' options={options} value={value} onChange={changeHandler} />
      </div>
      <div className='mt-4'>
      <label >Purpose of meeting <span className='text-primary'>*</span></label>
      <select type="text" name='pmeeting' value={pMeeting} onChange={(e) => setPMeeting(e.target.value)}>
        <option disabled selected className='text-gray-300'>Select your option</option>
        <option>Meet & greet</option>
        <option>Fan card</option>
      </select>
      </div>
      
      <div className='mt-4'>
      <label>Phone Number <span className='text-primary'>*</span></label>
      
      <PhoneInput
        
        defaultCountry="ua"
        value={phone}
        name='number'
        onChange={(phone) => setPhone(phone)}
      />
      </div>
      <div className='mt-4'>
        <label>Preferred Meeting Piont <span className='text-primary'>*</span></label>
        <input type='text' name='preferred' placeholder='State your meeting point' value={pmp} onChange={(e) => setPmp(e.target.value)}/>
      </div>
      <div className='mt-4'>
        <label>Favorite Celebrity <span className='text-primary'>*</span></label>
        <input type='text' name='favorite' placeholder='State your favorite celebrity' value={favCeleb} onChange={(e) => setFavCeleb(e.target.value)}/>
      </div>
      <div className='mt-4'>
        <label>Message</label>
        <textarea name='message' value={message} onChange={(e) => setMessage(e.target.value)}/>
      </div>
      <div className='mt-4'>
        <button className='primary' onSubmit={notify}>Book</button>
      </div>
    </form>
    <footer className='bg-gray-700'>
      <div className='max-w-2xl mx-auto text-white py-10 text-center'>
        <p>Copyright © 2024 meet & greet</p>
      </div>
    </footer>
  </div>
  );
}

export default App;