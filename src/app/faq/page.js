import styles from "../../../styles/pagestyles/faq.module.scss";
import {ControlledAccordion as Accordion} from "@/components/accordian/Accordion";

export default function FAQPage() {
    return (
        <main className={styles.FAQPage}>
            <section className={styles.FAQPage_headingSection}>
                <h1 className={styles.FAQPage_primaryHeading}>Frequently Asked Questions</h1>
            </section>
            <section className={styles.FAQPage_accordionSection}>
                <Accordion />
            </section>
        </main>
    );
}