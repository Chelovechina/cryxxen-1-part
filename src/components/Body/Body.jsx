import firstStyle from './FirstSection.module.scss';

import img from './../../assets/images/1.png';
import play from './../../assets/play-btn.svg';
import appStore from './../../assets/appstore-btn.svg';
import googlePlay from './../../assets/googleplay-btn.svg';

const Body = () => {
  return (
    <>
      <section className={firstStyle.firstSection}>
        <div className="container">
          <div className={firstStyle.firstSection__wrapper}>
            <div className={firstStyle.info}>
              <div className={firstStyle.info__play}>
                <img src={play} alt="play img" />
                <p className={firstStyle.info__subtext}>In every beginning, there is chaos.</p>
              </div>
              <h2 className={firstStyle.info__title}>Peaceful shopping.</h2>
              <h2 className={firstStyle.info__title}>Mindful money.</h2>
              <p className={firstStyle.info__text}>
                See how we can help with making your shopping experience and money management more
                ZEN.
              </p>
              <div className={firstStyle.info__btns}>
                <button className={firstStyle.info__btn}>
                  <img src={appStore} alt="App Store" />
                </button>
                <button className={firstStyle.info__btn}>
                  <img src={googlePlay} alt="Google Play" />
                </button>
              </div>
            </div>
            <div className={firstStyle.section__img}>
              <img src={img} alt="Zen app" />
            </div>
          </div>
        </div>
      </section>
      <section className="secondSection"></section>
    </>
  );
};

export default Body;
