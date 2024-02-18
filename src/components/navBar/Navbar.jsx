import React from 'react'
import {NavLink} from 'react-router-dom'
import ButtonDarkMode from '../buttonDarkMode/ButtonDarkMode'
/* style */
import './style.css'
import { FaGithub } from 'react-icons/fa';


export default function Navbar() {

  const activeLink = 'nav-list__link nav-list__link--active'
  const normalLink = 'nav-list__link';

  return (
    <div className='Navbar'>
      <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <NavLink to="/" className="logo">
                  <strong>Freelancer</strong> portfolio
                </NavLink>

                <ButtonDarkMode />

                <ul class="nav-list">

                    <li className="nav-list__item">
                      
                      <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                          Home
                      </NavLink> 

                    </li> 
                    
                    <li className="nav-list__item">

                      <NavLink to="./projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                        Projects
                      </NavLink>

                    </li>

                    <li className="nav-list__item">

                      <NavLink to="./contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                        Contacts
                      </NavLink>
                    </li>

                    <div className='iconsGit-hub'>
                        <a href="https://github.com/Gomer-narrator" target="_blank" className="fork-btn-inner btn btn-primary">
                          <FaGithub width={35} height={35}/>
                        </a>
                      </div>
                </ul>
            </div>
        </div>
      </nav>
    </div>
  )
}
