import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import "../styles/Home.css";
import pdf from "../assets/resume.pdf"

function Home() {
  return (
    <div className='home'> 
      <div className='about'>
        <h2> Hi, My name is Kenny</h2>
        <div className='prompt'>
          <p> A Full-Stack Web developer with a passion for learning and creating</p>
          <a href="https://github.com/KennyLingx"><GitHubIcon /></a>
          <a href="xling.w2322@gmail.com"><EmailIcon /></a>
          <h3>Download my resume here :<a href={pdf}><DownloadRoundedIcon /></a></h3>
          
         
        </div>
      </div>
      <div className='skills'>
        <h1> Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2> Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, React Native,  NPM
            , BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents</span>
          </li>
          <li className='item'>
            <h2> Back-End</h2>
            <span>APIs, NodeJS, ExpressJS, GraphQL, ApolloServer,
              MySQL, MongoDB, AWS S3, MS SQL, MERN Stack</span>
          </li>
          <li className='item'>
            <h2> Additional</h2>
            <span>Git, Microsoft Word, Excel, photoshop</span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home