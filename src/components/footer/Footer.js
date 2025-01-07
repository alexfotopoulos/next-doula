import styles from "./Footer.module.scss";
import Image from "next/image";
import Link from "next/link";
import LinkButton from "../linkButton/LinkButton";

export default function Footer() {
    return (
        <div className={styles.Footer}>
            <section className={styles.Footer_mainSection}>
                <Image
                    src="/images/Logo.jpg"
                    width={250}
                    height={250}
                    alt="your choice doula services logo"
                    className={styles.Footer_logo}
                />
                <div className={styles.Footer_iconContainer}>
                    <Link
                        href="https://www.instagram.com/yourchoicedoulaservices/"
                        target="_blank"
                    >
                        <Image
                            src="/icons/instagram-line.svg"
                            width={45}
                            height={45}
                            alt="instagram"
                        />
                    </Link>
                    <Link
                        href="https://www.facebook.com/profile.php?id=61553910251183"
                        target="_blank"
                    >
                        <Image
                            src="/icons/facebook-box-line.svg"
                            width={45}
                            height={45}
                            alt="facebook"
                        />
                    </Link>
                </div>
                <div className={styles.Footer_contactButton}>
                    <a href="mailto:yourchoicedoulaservices@gmail.com">Contact Me</a>
                </div>
            </section>
        </div>
    );
}
