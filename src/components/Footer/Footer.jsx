import Column from './Column';
import styles from './Footer.module.scss';
import Link from './Link';

import linkedIn from './../../assets/logos/linkedin.svg';
import zenZero from './../../assets/logos/zen-zero.svg';
import pci from './../../assets/logos/pci.svg';

const FooterColumns = [
  {
    title: 'Learn',
    links: ['Help center', 'join ZEN team', 'Privacy Policy', 'Cookies', 'Terms of use'],
  },
  {
    title: 'Discover',
    links: ['For developers', 'Apple Pay', 'Google Pay'],
  },
  {
    title: 'Offer',
    links: ['Business', 'Personal'],
  },
  {
    title: 'Language',
    links: ['English', 'Polish'],
  },
];

const Footer = () => {
  const columnsList = FooterColumns.map((column) => <Column key={column.title} {...column} />);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.top}>
            {columnsList}
            <Column title={'Follow us'}>
              <Link>
                <img src={linkedIn} alt="LinkedIn" />
              </Link>
            </Column>
            <Column title={'Contact us'} links={['hello@zen.com']} />
          </div>

          <div className={styles.bottom}>
            <div className={styles.zenZero}>
              <img src={zenZero} alt="Zen zero" />
            </div>
            <div className={styles.info}>
              <p className={styles.text}>
                ZEN.COM is a licensed financial institution under the supervision of the Central
                Bank of Lithuania approved by European Banking Authority for 31 countries.
                Registration number of the company 304749651, VAT ID LT100011714916. License of
                electronic money institutions number LB000457. Share capital 2.185.000,00 EUR.
                Company address: Mėsinių g. 5, LT-01133, Vilnius, Lithuania. Sales Office: ul.
                Emilii Plater 53, 00-113 Warsaw, Poland.
              </p>
              <img src={pci} alt="PCI" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
