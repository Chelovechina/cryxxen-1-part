import NavItem from './NavItem';
import './Header.scss';

import mastercard from './../../assets/logos/mastercard.svg';
import zen from './../../assets/logos/zen.svg';

const navLeft = ['Personal', 'Business'];
const navRight = ['Zenefits', 'Features', 'Pricing'];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__nav nav">
          <a href="#" className="nav__brands">
            <img src={zen} alt="Zen Logo" className="zen-logo" />
            <img src={mastercard} alt="Master Card Logo" className="mc-logo" />
          </a>
          <div className="nav__wrapper">
            <ul className="nav__left nav__list">
              {navLeft.map((item) => (
                <NavItem key={item} text={item} />
              ))}
            </ul>
            <ul className="nav__right nav__list">
              {navRight.map((item) => (
                <NavItem key={item} text={item} />
              ))}
              <li className="nav__item">
                <a href="#" className="nav__btn">
                  Get app
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
