import ContactForm from "@/components/contactForm/ContactForm";
import styles from "../../../styles/pagestyles/contact.module.scss";

export default function ContactPage() {
    return (
        <main>
            <section className={styles.ContactPage_formSection}>
                <ContactForm />
            </section>
        </main>
    );
}
