import { useTheme } from '../../utils/hooks/index'
import DownloadBtn from '../../components/downloadbtn/downloadbtn'
import MaPhoto from '../../assets/photo/moi.webp'
import GitHub from '../../assets/icones/github.png'
import DarkGitHub from '../../assets/icones/darkgithub.png'
import LinkedIn from '../../assets/icones/linkedin.png'
import DarkLinkedIn from '../../assets/icones/darklinkedin.png'
import Twitter from '../../assets/icones/twitter.png'
import DarkTwitter from '../../assets/icones/darktwitter.png'
import ImageStyle from '../../utils/style/imagestyle'
import '../../sass/containers/_introduction.scss'

const Introduction = () => {
  const { darkMode } = useTheme()

  return (
    <section className="intro">
      <h2 id="a-propos" className="intro__title">
        À propos
      </h2>
      <div className="intro__desc">
        <p>
          Passionné par les nouvelles technologies, j'ai choisi de me
          reconvertir après sans réel formation.
          <br />
          Et ainsi, de suivre ma passion pour la programmation et d'acquérir de
          nouvelles compétences qui viennent compléter celles acquises pendant
          mes années en tant que vendeur.
        </p>
        <p>
          Afin de me développer dans le domaine du développement web, j’ai
          intégré la formation certifiante intégrateur web niveau Bac +2
          d’OpenClassrooms au cours de laquelle j’ai acquis des compétences
          solides en HTML, CSS, JavaScript et React.
        </p>
        <p>
          Je suis très enthousiaste à l’idée de découvrir de nouvelles
          opportunités et développer de nouvelles compétences dans le domaine du
          développement web tout en perfectionnant celles déjà acquises.
        </p>
        <div className="intro__desc-liens">
          <a href="https://github.com/Lemonarque" target="blank">
            <img
              src={darkMode ? DarkGitHub : GitHub}
              alt="Lien vers mon profil Github"
            />
          </a>
          <a
            href="https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-jobsearch--indeedmobile"
            target="blank"
          >
            <img
              src={darkMode ? DarkLinkedIn : LinkedIn}
              alt="Lien vers mon profil LinkedIn"
            />
          </a>
          <a
            href="https://x.com/Mister_Hows"
            target="blank"
          >
            <img
              src={darkMode ? DarkTwitter : Twitter}
              alt="Lien vers mon profil Twitter"
            />
          </a>
        </div>
        <DownloadBtn />
      </div>
      <div className="intro__photo">
        <ImageStyle />
        <img
          className="image-theme"
          src={MaPhoto}
          alt="Portrait de Nour"
        />
        <h3>Nour Tarnagada</h3>
        <h3>Développeur front-end</h3>
      </div>
    </section>
  )
}

export default Introduction
