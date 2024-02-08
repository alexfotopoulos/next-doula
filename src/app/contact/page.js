import ContactForm from "@/components/contactForm/ContactForm";
import styles from "../../../styles/pagestyles/contact.module.scss";

export default function ContactPage() {
    return (
        <main className={styles.ContactPage}>
            <section className={styles.ContactPage_headingSection}>
                <h1 className={styles.ContactPage_primaryHeading}>Contact</h1>
            </section>
            <section className={"ComingSoonContainer"}>
                <p className={"ComingSoonText"}>Coming Soon...</p>
            </section>
            {/* <section className={styles.ContactPage_formSection}>
                <ContactForm />
            </section> */}
        </main>
    );
}
