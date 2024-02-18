import React from 'react'
import './style.css'
import gitIcon from './gitHub-black.svg'

export default function ButtonGithub({ link }) {
  return (
    <div>
       <a href={link} className="btn-outline" target="_blank" rel="noreferrer">
            <img src={gitIcon} alt="gitHub" />
            GitHub repo
        </a>
    </div>
  )
}
