import React from 'react'
/* icons */
import vk from './../../img/icons/vk.svg'
import instagram from './../../img/icons/instagram.svg'
import twitter from './../../img/icons/twitter.svg'
import gitHub from './../../img/icons/gitHub.svg'
import linkedIn from './../../img/icons/linkedIn.svg'
/* styles */
import './style.css'

export default function Footer() {
  return (
    <>
      <footer className="footer">
          <div className="container">
              <div className="footer__wrapper">
                  <ul className="social">
                      <li className="social__item"><a href="https://vk.com/linkto2_agency" target="_blank" rel="noopener noreferrer"><img src={vk} alt="Link"></img></a></li>
                      <li className="social__item"><a href="https://www.instagram.com/gomernarratorr/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Link"></img></a></li>
                      <li className="social__item"><a href="https://twitter.com/Aragyg" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Link"></img></a></li>
                      <li className="social__item"><a href="https://github.com/Gomer-narrator" target="_blank" rel="noopener noreferrer"><img src={gitHub} alt="Link"></img></a></li>
                  </ul>
                  <div className="copyright">
                      <p>© 2022 frontend-dev.com</p>
                  </div>
              </div>
          </div>
      </footer>
    </>
  )
}
