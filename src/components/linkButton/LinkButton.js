import styles from "./LinkButton.module.scss";
import Link from "next/link";

export default function LinkButton({text, url}) {
    return (
        <Link
            href={url}
            className={styles.LinkButton}
        >
            {text}
        </Link>
    );
}