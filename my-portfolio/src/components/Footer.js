import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "../styles/Footer.css"

function footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
        <a href="https://www.linkedin.com/in/xin-ling-512abb89/"><LinkedInIcon /></a>
        <a href="https://www.facebook.com/xin.ling.735"><FacebookIcon /></a>
        <a href="https://github.com/KennyLingx"><GitHubIcon /></a>
        </div>
        <p> &copy; KennyLing</p>
    </div>
  )
}

export default footer