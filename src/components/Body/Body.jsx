import styles from './Body.module.scss';

import img1 from './../../assets/images/1.png';
import img2 from './../../assets/images/2.png';
import img3 from './../../assets/images/3.png';
import img4 from './../../assets/images/4.png';
import img5 from './../../assets/images/5.png';
import img6 from './../../assets/images/6.png';
import img7 from './../../assets/images/7.png';

import play from './../../assets/play-btn.svg';
import appStore from './../../assets/appstore-btn.svg';
import googlePlay from './../../assets/googleplay-btn.svg';
import applePay from './../../assets/apple-pay.svg';
import googlePay from './../../assets/g-pay.svg';

import parner1 from './../../assets/logos/booking.svg';
import parner2 from './../../assets/logos/aliexpress.svg';
import parner3 from './../../assets/logos/alegro.svg';
import parner4 from './../../assets/logos/zalando.svg';
import parner5 from './../../assets/logos/lidl.svg';
import parner6 from './../../assets/logos/mediamarket.svg';
import parner7 from './../../assets/logos/rtv.svg';
import parner8 from './../../assets/logos/groupon.svg';

const Body = () => {
  return (
    <>
      <section className={styles.firstSection}>
        <div className="container">
          <div className={styles.firstSectionWrapper}>
            <div className={styles.firstInfo}>
              <div className={styles.play}>
                <img src={play} alt="play img" />
                <p className={styles.subtext}>In every beginning, there is chaos.</p>
              </div>
              <h1 className={styles.title}>
                Peaceful shopping.
                <br />
                Mindful money.
              </h1>
              <p className="text">
                See how we can help with making your shopping experience and money management more
                ZEN.
              </p>
              <div className={styles.btns}>
                <a href="#" className={styles.btn}>
                  <img src={appStore} alt="App Store" />
                </a>
                <a href="#" className={styles.btn}>
                  <img src={googlePlay} alt="Google Play" />
                </a>
              </div>
            </div>
            <div className="sectionImg">
              <img src={img1} alt="Zen app" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.secondSection}>
        <div className="container">
          <div className={styles.sectionWrapper}>
            <div className="sectionImg">
              <img src={img2} alt="Zen app" />
            </div>
            <div className={styles.secondInfo}>
              <h2 className={`sectionTitle ${styles.title}`}>1-year warranty boost</h2>
              <p className={`text ${styles.text}`}>
                ZEN cards have a very neat feature that will help you whenever your electronic
                devices start failing after the standard warranty ends, which is pretty common.
              </p>
              <p className="text">
                When you buy any electronics with your ZEN shopping Mastercard®, their warranty gets
                extended by one year. How does it work? It simply does. Automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.thirdSection}>
        <div className="container">
          <div className={styles.sectionWrapper}>
            <div className={styles.thirdInfo}>
              <h2 className={`sectionTitle ${styles.title}`}>ZEN Care</h2>
              <p className={`text ${styles.text1}`}>
                Shopping online is usually a delightful experience. Until it's not.
              </p>
              <p className={`text ${styles.text2}`}>
                Until something you buy, proves to be faulty, missing or a totally wrong item,
                you’re in for long product return procedures.
              </p>
              <p className="text">
                But, here comes ZEN Care: a free, built-in shopping protection. You can rest assured
                we’ll handle all of the transaction-related problems faster and with higher success
                rates. Where lone consumers can be ignored or dumped by dishonest merchants, ZEN
                doesn't get discouraged. ZEN persists.
              </p>
            </div>
            <div className="sectionImg">
              <img src={img3} alt="Zen app" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.forthSection}>
        <div className="container">
          <div className={styles.forthSectionWrapper}>
            <div className={styles.forthInfo}>
              <h2 className="sectionTitle">and cashback!</h2>
              <p className={`text ${styles.text}`}>
                It saves a little bit of money while you’re shopping, but in many cases it takes
                ages to get anything out of it. We gave it a thought and made cashback way more
                friendly. Up to 14% of what you spend using ZEN Mastercard ® will materialize on
                your account right after the purchase. It's like you haggled some cash, despite you
                didn't have to. Just don't forget to use in-app cashback link.
              </p>
            </div>
            <a href="#" className={styles.forthBtn}>
              Show more partners
            </a>
            <div className={styles.partnersList}>
              <div className={styles.parner}>
                <img src={parner1} alt="Booking" className={styles.partner} />
              </div>
              <div className={styles.parner}>
                <img src={parner2} alt="AliExpress" className={styles.partner} />
              </div>
              <div className={styles.parner}>
                <img src={parner3} alt="Allegro" className={styles.partner} />
              </div>
              <div className={styles.parner}>
                <img src={parner4} alt="Zalando lounge" className={styles.partner} />
              </div>
              <div className={styles.parner}>
                <img src={parner5} alt="LIDL" className={styles.partner} />
              </div>
              <div className={styles.parner}>
                <img src={parner6} alt="Media Markt" className={styles.partner} />
              </div>
              <div className={styles.parner}>
                <img src={parner7} alt="RTVAGD" className={styles.partner} />
              </div>
              <div className={styles.parner}>
                <img src={parner8} alt="GROUPON" className={styles.partner} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.fifthSection}>
        <div className="container">
          <div className={styles.sectionWrapper}>
            <div className={styles.fifthInfo}>
              <h2 className={`sectionTitle ${styles.title}`}>ZEN shopping Mastercard</h2>
              <p className={styles.icon}>®</p>
              <div className={`text ${styles.text}`}>
                You shouldn’t be bound to use one card at a time, especially when it has so many
                benefits! With ZEN, you <br /> can manage your shopping and finances with both{' '}
                <br />
                physical and virtual cards. It’s convenient, streamlined, and works like a charm.
                You can have a shopping card, a subscription card, and whatever other cards that
                make sense to you.
              </div>
              <div className={styles.payments}>
                <a href="#" className={styles.payment}>
                  <img src={applePay} alt="Apple Pay" />
                </a>
                <a href="#" className={styles.payment}>
                  <img src={googlePay} alt="Google Pay" />
                </a>
              </div>
            </div>
            <div className="sectionImg">
              <img src={img4} alt="Zen app" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.sixthSection}>
        <div className="container">
          <div className={styles.sectionWrapper}>
            <div className="sectionImg">
              <img src={img5} alt="Zen app" />
            </div>
            <div className={styles.sixthInfo}>
              <h2 className={`sectionTitle ${styles.title}`}>Shopping with no fees</h2>
              <p className={`text ${styles.text}`}>
                Online shopping is flawed with all kind of fees. Currency exchange fees, processing
                fees and even fees for having multiple fees. Getting rid of them became our hobby.
                Same goes for ATM withdrawal fees.
              </p>
              <p className="text">
                Enjoy your money globally. Every uncut part of it. <br /> Keep reading. ZEN goes
                beyond shopping with a <br /> fully functional account.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.seventhSection}>
        <div className="container">
          <div className={styles.sectionWrapper}>
            <div className={styles.seventhInfo}>
              <h2 className={`sectionTitle ${styles.title}`}>
                One app, one account, <br /> many currencies
              </h2>
              <p className={`text ${styles.text}`}>
                ZEN Mastercard® was made for spending money. ZEN account is here to store and manage
                it peacefully, from the inside of your pocket.
              </p>
              <p className="text">
                You can use it just like a regular account, as it has its own IBAN and works just
                the way any bank account would — but better. Store up to 30 currencies and transfer
                them easily in many ways.
              </p>
            </div>
            <div className="sectionImg">
              <img src={img6} alt="Zen app" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.eighthSection}>
        <div className="container">
          <div className={styles.sectionWrapper}>
            <div className="sectionImg">
              <img src={img7} alt="Zen app" />
            </div>
            <div className={styles.eighthInfo}>
              <h2 className={`sectionTitle ${styles.title}`}>
                Quick and easy <br /> account creation
              </h2>
              <div className={`text ${styles.text1}`}>
                Now, you might be thinking that it’s just like any other account creation… Long,
                tiresome and full of endless blanks to fill in. Well, it’s not.
              </div>
              <div className={`text ${styles.text2}`}>
                We have designed the whole process to make it the simplest and the shortest one ever
                conceived for a personal account. Download the app and see for yourself!
              </div>
              <div className={styles.btns}>
                <a href="#" className={styles.btn}>
                  <img src={appStore} alt="App Store" />
                </a>
                <a href="#" className={styles.btn}>
                  <img src={googlePlay} alt="Google Play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
