import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledTagStyle = createGlobalStyle`
.tag {
    background-color: ${(props) =>
        props.isDarkMode ? '#A3DEE7' : '#4419FF'};
    border: none;
    border-radius: 1000px;    
    padding: 6px 12px
}
`

function TagStyle() {
    const { theme } = useTheme()
  
    return <StyledTagStyle isDarkMode={theme === 'dark'} />
  }
  
  export default TagStyle