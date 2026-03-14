import languages from '../assets/languages'

export default function LanguageCard() {
  const { id, title, description } = languages[0];

  return (
    <>
      <div className="card" key={id}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </>
  )

}

