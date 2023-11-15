import { createGlobalStyle } from 'styled-components'
import { useTheme } from '../hooks'

const StyledImageStyle = createGlobalStyle`
    .image-theme {
        box-shadow: ${(props) =>
          props.isDarkMode
            ? '3px 3px 10px 3px #FFFFFFcc'
            : '6px 4px 12px 6px #000000cc'};
    }
`

function ImageStyle() {
  const { theme } = useTheme()

  return <StyledImageStyle isDarkMode={theme === 'dark'} />
}

export default ImageStyle
