import styles from './Footer.module.scss';

const Link = ({ children }) => {
  return (
    <li className={styles.linkItem}>
      <a href="#" className={styles.link}>
        {children}
      </a>
    </li>
  );
};

export default Link;
