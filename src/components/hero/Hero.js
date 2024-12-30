import styles from "./Hero.module.scss";
import Image from "next/image";
import { Allura } from "next/font/google";

const allura = Allura({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-allura",
});

export default function Hero() {
    return (
        <section className={styles.Hero}>
            <Image
                src="/images/Website Homepage.JPG"
                width={500}
                height={500}
                alt="placeholder hero image"
                className={styles.Hero_image}
            />
        </section>
    );
}
