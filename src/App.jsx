import languages from './assets/languages'

function App() {


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

export default App
