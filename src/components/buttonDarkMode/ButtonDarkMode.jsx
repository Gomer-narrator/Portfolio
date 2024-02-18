import React from 'react'
import { useLocalStorage } from './../../utils/useLocalStorage';
import detectDarkMode from './../../utils/detectDarkMode';
import './style.css'
/* icons */
import sun from './sun.svg'
import moon from './moon.svg'

export default function ButtonDarkMode() {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode()) 

  const btnRef = React.useRef(null)
  

  React.useEffect(() => {
    if (darkMode === 'dark') {
        document.body.classList.add('dark')
        btnRef.current.classList.add('dark-mode-btn--active')
    } else {
        document.body.classList.remove('dark')
        btnRef.current.classList.remove('dark-mode-btn--active')
    }

  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light'
    })
  }
    
  return (
    <>
        <button ref={btnRef} className="dark-mode-btn" onClick={toggleDarkMode}>
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon"></img>
            <img src={moon} alt="Dark mode" className="dark-mode-btn__icon"></img>
        </button>
    </>
  )
}
