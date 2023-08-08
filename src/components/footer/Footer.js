import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <section className={styles.Footer_mainSection}>
                <h1 className={styles.Footer_title}>The Nashville Doula</h1>
                <div className={styles.Footer_iconContainer}>
                    <Link href="#">
                        <Image
                            src="/icons/instagram-line.svg"
                            width={25}
                            height={25}
                            alt="instagram"
                        />
                    </Link>
                    <Link href="#">
                        <Image
                            src="/icons/facebook-box-line.svg"
                            width={25}
                            height={25}
                            alt="facebook"
                        />
                    </Link>
                </div>
            </section>
        </div>
    );
}
