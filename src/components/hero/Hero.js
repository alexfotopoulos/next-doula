import styles from "./Hero.module.scss";
import Image from "next/image";

export default function Hero() {
    return (
        <section>
            <Image
                src="/images/hero-placeholder.jpg"
                width={500}
                height={500}
                alt="placeholder hero image"
                className={styles.Hero_image}
            />
            <h1 className={styles.Hero_text}>Welcome to Your Choice Doula Services</h1>
        </section>
    );
}
