import languages from '../assets/languages'
import { useState } from 'react'

export default function LanguagesNav() {
  let [stato, aggiornaStato] = useState(0);

  return (
    
    <>
      {
        languages.map((language) => {
          const { id, title } = language;
          
          return (
            <button 
            key={id}
              onClick={() => { aggiornaStato(stato = id); console.log(stato, id); }}>
              {title}
            </button>
          )
        })
      
      }
    </>
  )
}


