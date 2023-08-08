import styles from "../../../styles/pagestyles/faq.module.scss";

export default function FAQPage() {
    return (
        <div className={styles.FAQPage}>
            <section className={styles.FAQPage_headingSection}>
                <h1 className={styles.FAQPage_primaryHeading}>Frequntly Asked Questions</h1>
            </section>
            <section className={styles.FAQPage_accordianSection}>
            </section>
        </div>
    );
}