import languages from '../assets/languages'

function LanguagesNav() {


  return (

    <>

      {
        languages.map((language) => {
          const { id, title } = language;

          return (
            <button key={id}>
              {title}
            </button>
          )
        })
      }

    </>
  )
}

export default LanguagesNav
