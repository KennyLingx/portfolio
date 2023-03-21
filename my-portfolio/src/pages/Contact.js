import React from 'react'
import "../styles/Contact.css"
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useState } from "react";


function Contact() {
    const [data, setData] = useState({name:"", email:"",  phone:"", message:""});
    const handleChange = (e)=> {
      const name = e.target.name;
      const value = e.target.value;
      setData({...data, [name]:value})
    }

    const handleSend = (e) =>{
      e.preventDefault()
      alert("sent!");
      console.log(1)
    }
  return (
    <div>
      
      <form>
        <h1>Contact<span> Here</span></h1>
        <input type="text" name="name" id="" onChange={handleChange}placeholder="Enter Name"/>
        <input type="email" name="email" id="" onChange={handleChange}placeholder="example@gmail.com"/>
        <input type="Phone" name="phone" id="" onChange={handleChange}placeholder="+1"/>
        <textarea name="message" id=""  cols="30" rows="10" onChange={handleChange} placeholder="leave your message here..."/>
        <Button variant="contained" endIcon={<SendIcon />} onChange={handleSend}>Send</Button>
      </form>
      
    </div>
  )
}

export default Contact