import React, { useState } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'

type Props = {}

function Contact({}: Props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    })

function handleOnChange(e: any) {
    setForm({...form, [e.target.name]: e.target.value});
    console.log(form)
}
function handleOnClick(e:any) {
    e.preventDefault();
    window.location.href= `mailto:javierferrari@gmail.com?subject=${form.title}&body=Hi, my name is ${form.name}
    Message: ${form.message} and email: ${form.email}`
}



  return (
<div className='flex flex-col h-screen text-center  md:text-left md:flex-row mx-auto max-w-4xl px-10 justify-evenly items-center '>
        <div className='flex flex-col items-center'>

        <h3 className='top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
        <div className='flex flex-col space-y-10 mt-12'>
            <div className='flex items-center space-x-5 justify-center'>
            <PhoneIcon className='text-orange-400 h-7 w-7 animate-pulse'></PhoneIcon>
            <span className='text-2xl' >11-4148-6066</span>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-orange-400 h-7 w-7 animate-pulse'></EnvelopeIcon>
            <span className='text-2xl' >javierferrarimezher@gmail.com</span>
            </div>
            <div className='flex items-center space-x-5 justify-center'>
            <MapPinIcon className='text-orange-400 h-7 w-7 animate-pulse'></MapPinIcon>
            <span className='text-2xl' >Bs. As., Argentina</span>
            </div>

        <form className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
                <input className="contactInput" name='name' value={form.name} placeholder='Name' 
                type='text' onChange={(e) => handleOnChange(e)}></input>
                <input className="contactInput" name='email'value={form.email} placeholder='Email' 
                type='text' onChange={(e) => handleOnChange(e)}></input>
            </div>
            <input placeholder='Title' name='title' value={form.title} className="contactInput" type='text' onChange={(e) => handleOnChange(e)}></input>
            <textarea placeholder='Message' name='message' value={form.message} className="contactInput" onChange={(e) => handleOnChange(e)}></textarea>
            <button className='text-black rounded-sm bg-orange-400 font-bold py-5 text-sm ' 
                onSubmit={(e) => handleOnClick(e)}>Submit</button>
        </form>


        </div>
        </div>
        </div>
  )
}

export default Contact