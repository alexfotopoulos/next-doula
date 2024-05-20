// import ContactForm from "@/components/contactForm/ContactForm";
import styles from "../../../styles/pagestyles/contact.module.scss";
import LinkButton from "@/components/linkButton/LinkButton";

export default function ContactPage() {
    return (
        <main className={styles.ContactPage}>
            <section className={styles.ContactPage_headingSection}>
                <h1 className={styles.ContactPage_primaryHeading}>Contact</h1>
            </section>
            <section className={"ComingSoonContainer"}>
                <p className={styles.ContactPage_paragraph}>I&apos;d love to chat about your needs - send me an email to connect!</p>
                <a className="ContactLink" href="mailto:yourchoicedoulaservices@gmail.com">Contact Me</a>
            </section>
            {/* <section className={styles.ContactPage_formSection}>
                <ContactForm />
            </section> */}
        </main>
    );
}