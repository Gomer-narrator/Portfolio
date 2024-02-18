import React from 'react'

export default function Contacts() {
  return (
    <div>
       <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Stavropol, Russia</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="https://t.me/xxxwww001" target="_blank" rel="noopener noreferrer">https://t.me/xxxwww001</a></p>
                        <p><a href="tel:+79530838367">+7 (953) 083-83-67</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:it.web.developer.programming@gmail.com">it.web.developer.programming@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    </div>
  )
}
