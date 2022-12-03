import styles from './Header.module.scss';

const NavItem = ({ text }) => {
  return (
    <li className={styles.nav__item}>
      <a href="#" className={styles.nav__link}>
        {text}
      </a>
    </li>
  );
};

export default NavItem;
