import styles from "./BlogTile.module.scss";
import Link from "next/link";

export default function BlogTile({ title, description }) {
    return (
        <Link href="#">
            <div className={styles.BlogTile}>
                <h3 className={styles.BlogTile_title}>{title}</h3>
                <p className={styles.BlogTile_description}>{description}</p>
            </div>
        </Link>
    );
}
