import { Link } from 'react-router-dom'
import { useTheme } from '../../utils/hooks/index'
import LogoMb from '../../assets/logo/logo.svg'
import DarkLogoMb from '../../assets/logo/darklogo.svg'

const Logo = () => {
  const { theme } = useTheme()
  return (
    <div className="header__logo">
      <Link to="/">
        <img
          src={theme === 'dark' ? DarkLogoMb : LogoMb}
          alt="Mon logo personnel"
        />
      </Link>
    </div>
  )
}

export default Logo
