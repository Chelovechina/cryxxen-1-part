import NavItem from './NavItem';
import styles from './Header.module.scss';

import mastercard from './../../assets/logos/mastercard.svg';
import zen from './../../assets/logos/zen.svg';

const navLeft = ['Personal', 'Business'];
const navRight = ['Zenefits', 'Features', 'Pricing'];

const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <nav className={styles.nav}>
          <a href="#" className={styles.nav__brands}>
            <img src={zen} alt="Zen Logo" />
            <img src={mastercard} alt="Master Card Logo" />
          </a>
          <div className={styles.nav__wrapper}>
            <ul className={`${styles.nav__left} ${styles.nav__list}`}>
              {navLeft.map((item) => (
                <NavItem key={item} text={item} />
              ))}
            </ul>
            <ul className={`${styles.nav__right} ${styles.nav__list}`}>
              {navRight.map((item) => (
                <NavItem key={item} text={item} />
              ))}
              <li className={styles.nav__item}>
                <a href="#" className={styles.nav__btn}>
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
