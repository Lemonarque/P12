import ButtonStyle from '../../utils/style/boutonstyle'
import pdf from '../../assets/icones/pdf.svg'
import cv from '../../assets/download/cv.pdf'
import '../../sass/components/_buttonstyle.scss'

const DownloadBtn = () => {
  return (
    <div className='button-cv'>
      <ButtonStyle />
      <a
          className="intro-desc-cv theme-color"
          href={cv}
          target="blank"
          rel="noreferrer"
          aria-label="Télécharger mon CV"
          aria-roledescription="Document PDF"
        >
        <button className="intro__desc-cv theme-color">
            Télécharger mon CV
            <img src={pdf} alt="Icône document PDF" />
        </button>
      </a>
    </div>
  )
}

export default DownloadBtn
