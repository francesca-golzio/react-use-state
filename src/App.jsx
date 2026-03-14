/* import LanguagesNav from './components/LanguagesNav.jsx'
import LanguageCard from './components/LanguageCard.jsx' */
import languages from './assets/languages'
import { useState } from 'react'

function App() {
  let [attivo, aggiornaAttivo] = useState(0);

  return (
    <>

      {languages.map((language) => {
        const { id, title } = language;

        return (
          <button key={id} onClick={() => { aggiornaAttivo(attivo = (id - 1)) }}>{title}</button>
        )
      })}

      <div className="card">
        <h2>{languages[attivo].title}</h2>
        <p>{languages[attivo].description}</p>
      </div>


    </>
  )
}

export default App
