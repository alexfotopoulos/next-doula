import Service from "@/components/service/Service";
import styles from "../../../styles/pagestyles/service.module.scss";
import { servicesData } from "../../../helpers/servicesData";

export default function ServicesPage() {
    return (
        <main className={styles.ServicesPage}>
            <header className={styles.ServicesPage_headingSection}>
                <h1 className={styles.ServicesPage_primaryHeading}>Services</h1>
            </header>
            <section className={styles.ServicesPage_servicesContainer}>
                {servicesData.map((s) => (
                    <Service
                        key={s.id}
                        image={s.image}
                        title={s.title}
                        description={s.description}
                        anchor={s.anchor}
                        price={s.price}
                    />
                ))}
            </section>
        </main>
    );
}
