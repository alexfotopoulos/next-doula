import Service from "@/components/service/Service";
import styles from "../../../styles/pagestyles/service.module.scss";
import { servicesData } from "../../../helpers/servicesData";

export default function ServicesPage() {
    return (
        <div>
            <section className={styles.ServicesPage_headingSection}>
                <h1 className={styles.ServicesPage_primaryHeading}>Services</h1>
            </section>
            <section className={styles.ServicesPage_servicesContainer}>
                {servicesData.map((s) => (
                    <Service
                        key={s.id}
                        title={s.title}
                        description={s.description}
                    />
                ))}
            </section>
        </div>
    );
}
