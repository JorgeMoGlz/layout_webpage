import styles from './hero.module.css';

import Image from 'next/image';

const Hero = () => {
    return (
        <section className={styles.heroSection}>
            <div className={`${styles.wrapper} ${styles.heroContainer}`}>
                <div className={styles.textSide}>
                    <h1>Dejanos asesorarte en el uso seguro de la <span>radiación</span></h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium explicabo veniam unde minima asperiores ea quae corporis, culpa et recusandae.</p>
                    <span className={styles.cta}>
                        <button>Blog</button>
                        <button>Contacto</button>
                    </span>
                </div>
                <div className={styles.visualSide}>
                    <img src="/placeholder.png" alt="place" className={styles.firstImage} />
                    <img src="/placeholder.png" alt="place" className={styles.secondImage} />
                    <img src="/placeholder.png" alt="place" className={styles.thirdImage} />
                    <div className={styles.backGradient}></div>
                </div>
            </div>
        </section>
    )
}

export default Hero