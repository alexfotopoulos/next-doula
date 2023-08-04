import styles from "./NavbarModal.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function NavbarModal(props) {
    function handleClick() {
        props.onClose();
    }
    return (
        <div>
            <Image
                src="/icons/close-line.svg"
                width={30}
                height={30}
                alt="close menu"
                onClick={handleClick}
                className={styles.Modal_closeIcon}
            />
            <div className={styles.Modal_backdrop}></div>
            <div className={styles.Modal_menu}>
                <div className={styles.linksGroup}>
                    <Link
                        className={styles.Modal_link}
                        href="/about"
                        onClick={handleClick}
                    >
                        About
                    </Link>
                    <Link
                        className={styles.Modal_link}
                        href="/services"
                        onClick={handleClick}
                    >
                        Services
                    </Link>
                    <Link
                        className={styles.Modal_link}
                        href="/faq"
                        onClick={handleClick}
                    >
                        FAQ
                    </Link>
                    <Link
                        className={styles.Modal_link}
                        href="/blog"
                        onClick={handleClick}
                    >
                        Blog
                    </Link>
                    <Link
                        className={styles.Modal_link}
                        href="/contact"
                        onClick={handleClick}
                    >
                        Contact
                    </Link>
                    <Link
                        className={styles.Modal_link}
                        href="/resources"
                        onClick={handleClick}
                    >
                        Resources
                    </Link>
                </div>
            </div>
        </div>
    );
}
