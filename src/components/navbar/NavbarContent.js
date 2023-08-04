import Link from "next/link";
import styles from "./NavbarContent.module.scss";

export default function NavbarContent() {
    return (
        <>
            <div className={styles.Navbar_links}>
                <Link className={styles.Navbar_link} href="/about">
                    About
                </Link>
                <Link className={styles.Navbar_link} href="/services">
                    Services
                </Link>
                <Link className={styles.Navbar_link} href="/faq">
                    FAQ
                </Link>
                <Link className={styles.Navbar_link} href="/blog">
                    Blog
                </Link>
                <Link className={styles.Navbar_link} href="/contact">
                    Contact
                </Link>
                <Link className={styles.Navbar_link} href="/resources">
                    Resources
                </Link>
            </div>
        </>
    );
}
