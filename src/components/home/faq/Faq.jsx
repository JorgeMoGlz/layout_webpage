import styles from './faq.module.css';

const Faq = () => {
    return (
        <section className={styles.faqSection}>
            <div className={styles.faqContainer}>
                <div>
                    <h6>FAQ | Preguntas frecuentes</h6>
                    <h2>Alguna pregunta</h2>
                    <div className={`${styles.accordion} ${styles.accordionFlush}`} id="accordion">
                        <div className={styles.accordionItem}>
                            <h2 className={styles.accordionHeader}>
                                <button className={styles.accordionButton} 
                                    type="button" 
                                    data-bs-toggle="collapse"
                                    data-bs-target="#coll1"
                                    aria-expanded="true"
                                    aria-controls="coll1">
                                    <h5>¿Qué es esta pregunta?</h5>
                                </button>
                                <div id="coll1" 
                                    className={`${styles.accordionCollapse} ${styles.collapse} ${styles.show}`}
                                    data-bs-parent="#accordion">
                                    <div className={styles.accordionBody}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste vero veritatis amet possimus ullam!
                                    </div>
                                </div>
                            </h2>
                        </div>
                        <div className={styles.accordionItem}>
                            <h2 className={styles.accordionHeader}>
                                <button className={styles.accordionButton} 
                                    type="button" 
                                    data-bs-toggle="collapse"
                                    data-bs-target="#coll2"
                                    aria-expanded="true"
                                    aria-controls="coll2">
                                    <h5>¿Qué es esta pregunta?</h5>
                                </button>
                                <div id="coll2" 
                                    className={`${styles.accordionCollapse} ${styles.collapse} ${styles.show}`}
                                    data-bs-parent="#accordion">
                                    <div className={styles.accordionBody}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit iste vero veritatis amet possimus ullam!
                                    </div>
                                </div>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Faq