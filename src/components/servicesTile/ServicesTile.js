import styles from "./ServicesTile.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function ServicesTile({ title, image, anchor }) {
    return (
        <Link href={`/services#${anchor}`}>
            <div className={styles.ServicesTile}>
                <h1 className={styles.ServicesTile_title}>{title}</h1>
                <Image
                    src={image}
                    width={350}
                    height={250}
                    alt={title}
                    className={styles.ServicesTile_image}
                />
            </div>
        </Link>
    );
}