import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledLinkStyle = createGlobalStyle`
    .link-theme::after {
        border-bottom: ${(props) =>
          props.isDarkMode ? '4px solid #A3DEE7' : '4px solid #4419FF'};
        content: '';
        display: block;
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
    }    
    .link-theme:hover::after {
        transform: scaleX(1);
    }
`

function LinkStyle() {
  const { theme } = useTheme()

  return <StyledLinkStyle isDarkMode={theme === 'dark'} />
}

export default LinkStyle
