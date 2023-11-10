import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledButtonStyle = createGlobalStyle`
    .intro__desc-cv {
        background-color: ${(props) => 
        props.isDarkMode ? '#A3DEE7' : '#4419FF'};
        border: none;
        border-radius: 20px; 
        cursor: pointer;
        margin-top: 10px;
        height: 35px;  
        width: 200px;    
    } 
    .theme-color {
        color: ${(props) =>
            props.isDarkMode ? 'black' : 'white'};
        font-size: 16px;    
    }
`

function ButtonStyle() {
  const { theme } = useTheme()

  return <StyledButtonStyle isDarkMode={theme === 'dark'} />
}

export default ButtonStyle