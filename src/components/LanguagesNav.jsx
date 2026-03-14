// TEMPORANEAMENTE NON UTILIZZATO
/* import languages from '../assets/languages'
import { useState } from 'react'

export default function LanguagesNav() {
  let [attivo, aggiornaAttivo] = useState(0);

  return (

    <>
      {
        languages.map((language) => {
          const { id, title } = language;

          return (
            <button
              key={id}
              onClick={() => { aggiornaAttivo(attivo = id); console.log(attivo, id) }}>
              {title}
            </button>
          )
        })
      }
    </>
  )
}


 */