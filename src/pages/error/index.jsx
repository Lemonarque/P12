import { useTheme } from '../../utils/hooks'
import ButtonStyle from '../../utils/style/boutonstyle'
import LightError from '../../assets/error/404-page-not-found.png'
import DarkError from '../../assets/error/darkmode-404-page-not-found.png'
import '../../sass/pages/_error.scss'

const Error = () => {
  const { theme } = useTheme()
  return (
    <main className="error">
      <img
        className="error__image"
        src={theme === 'dark' ? DarkError : LightError}
        alt="erreur 404"
      />
      <p className="error_text">LA PAGE QUE VOUS DEMANDEZ N'EXISTE PAS...</p>
      <ButtonStyle />
      <button className="error__button">
        <a className="theme-color" href="/">
          Retourner à la page d'accueil
        </a>
      </button>
    </main>
  )
}

export default Error
