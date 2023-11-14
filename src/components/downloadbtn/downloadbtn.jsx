import ButtonStyle from "../../utils/style/boutonstyle";
import cv from "../../assets/download/cv.pdf";
import '../../sass/components/_buttonstyle.scss'

const DownloadBtn = () => {
  return (
    <div>
        <ButtonStyle />
        <button className='intro__desc-cv'>
            <a 
                className='theme-color'
                href={cv} 
                target='blank'
                rel='noreferrer'
                aria-label='download'
            >
                Télécharger mon CV
            </a>
        </button>
    </div>
  );
};

export default DownloadBtn;                
                
                
                
                