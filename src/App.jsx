/* import LanguagesNav from './components/LanguagesNav.jsx'
import LanguageCard from './components/LanguageCard.jsx' */
import languages from './assets/languages'
import { useState } from 'react'

function App() {
  let [attivo, aggiornaAttivo] = useState('');

  return (
    <>

      {languages.map((language) => {
        const { id, title } = language;

        return (
          <button key={id} onClick={() => { aggiornaAttivo(attivo = (id)); console.log(attivo, id); }}>{title}</button>
        )
      })}

      <div className="card">
        {
          attivo ?
            <div className="card-body">
              <h2>{languages[attivo - 1].title}</h2>
              <p>{languages[attivo - 1].description}</p>
            </div>
            :
            'nessun linguaggio selezionato'
        }
      </div>


    </>
  )
}

export default App
