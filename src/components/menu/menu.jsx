import DarkMode from '../darkmode/darkmode';
import '../../sass/components/_menu.scss';

const Menu = () => {
    return (
        <div className="header__menu">
            <ul>
                <li>À PROPOS</li>
                <li>COMPÉTENCES</li>
                <li>PROJETS</li>
                <li>CONTACT</li>
                <li><DarkMode /></li>
            </ul>
        </div>
    );
};

export default Menu;