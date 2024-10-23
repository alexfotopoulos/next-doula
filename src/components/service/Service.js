import styles from "./Service.module.scss";
import Image from "next/image";

export default function Service({ image, title, description, anchor, price }) {
    return (
        <div className={styles.Service} id={anchor}>
            <Image
                src={image}
                width={350}
                height={250}
                alt={title}
                className={styles.Service_image}
            />
            <div>
                <h2 className={styles.Service_title}>{title}</h2>
                <p className={styles.Service_description}>{description}</p>
                <ul className={styles.Service_price}>{price.length > 0 && <span>Investment:</span>}{price.map(p => <li key={p}>{p}</li>)}</ul>
            </div>
        </div>
    );
}