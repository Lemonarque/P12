import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledGlobalStyle = createGlobalStyle`
    body {
        background-color: ${(props) =>
          props.isDarkMode ? '#3a3a3a' : '#FAFAF2'};
        color: ${(props) =>
          props.isDarkMode ? 'white' : 'black'}; 
        margin: 20px 80px;  
        width: 90%;
    }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle