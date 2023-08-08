import styles from "./Service.module.scss";

export default function Service({ title, description }) {
    return (
        <div className={styles.Service}>
            <h2 className={styles.Service_title}>{title}</h2>
            <p className={styles.Service_description}>{description}</p>
        </div>
    );
}
