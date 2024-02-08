import styles from "../../../styles/pagestyles/resources.module.scss";

export default function ResourcesPage() {
    return (
        <main className={styles.ResourcesPage}>
            <section className={styles.ResourcesPage_headingSection}>
                <h1 className={styles.ResourcesPage_primaryHeading}>Resources</h1>
            </section>
            <section className={"ComingSoonContainer"}>
                <p className={"ComingSoonText"}>Coming Soon...</p>
            </section>
        </main>
    );
}