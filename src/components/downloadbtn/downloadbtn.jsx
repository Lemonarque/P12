import ButtonStyle from '../../utils/style/boutonstyle'
import pdf from '../../assets/icones/pdf.svg'
import cv from '../../assets/download/cv.pdf'
import '../../sass/components/_buttonstyle.scss'

const DownloadBtn = () => {
  return (
    <div>
      <ButtonStyle />
      <button className="intro__desc-cv">
        <a
          className="theme-color"
          href={cv}
          target="blank"
          rel="noreferrer"
          aria-label="Télécharger mon CV"
          aria-roledescription="Document PDF"
        >
          Télécharger mon CV
          <img src={pdf} alt="Icône document PDF" />
        </a>
      </button>
    </div>
  )
}

export default DownloadBtn
