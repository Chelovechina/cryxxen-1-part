import styles from './Body.module.scss';
import img from './../../assets/images/1.png';
import play from './../../assets/play-btn.svg';
import appStore from './../../assets/appstore-btn.svg';
import googlePlay from './../../assets/googleplay-btn.svg';

const Body = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.section__wrapper}>
          <div className={styles.info}>
            <div className={styles.info__play}>
              <img src={play} alt="play img" />
              <p className={styles.info__subtext}>In every beginning, there is chaos.</p>
            </div>
            <h2 className={styles.info__title}>Peaceful shopping.</h2>
            <h2 className={styles.info__title}>Mindful money.</h2>
            <p className={styles.info__text}>
              See how we can help with making your shopping experience and money management more
              ZEN.
            </p>
            <div className={styles.info__btns}>
              <button className={styles.info__btn}>
                <img src={appStore} alt="App Store" />
              </button>
              <button className={styles.info__btn}>
                <img src={googlePlay} alt="Google Play" />
              </button>
            </div>
          </div>
          <div className={styles.section__img}>
            <img src={img} alt="Zen app" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;
