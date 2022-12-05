import styles from './Footer.module.scss';
import Link from './Link';

const Column = ({ title, links, children }) => {
  const linkList = links?.map((text) => <Link key={text}>{text}</Link>);

  return (
    <div className={styles.column}>
      <h4 className={styles.title}>{title}</h4>
      <ul className={styles.linksList}>
        {linkList}
        {children}
      </ul>
    </div>
  );
};

export default Column;
