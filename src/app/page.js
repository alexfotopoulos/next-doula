import Hero from "@/components/hero/Hero";
import Image from "next/image";
import ServicesTile from "@/components/servicesTile/ServicesTile";
import { servicesData } from "../../helpers/servicesData";
import styles from "../../styles/pagestyles/home.module.scss";
import LinkButton from "@/components/linkButton/LinkButton";

export default function Home() {
    return (
        <main>
            <Hero />
            <header className={styles.HomePage_introHeading}>Welcome to Your Choice Doula Services</header>
            <section className={styles.HomePage_introSection}>
                <Image
                    src="/images/katherine_about_heading.JPG"
                    width={500}
                    height={500}
                    alt="Katherine and her daughter Andi"
                    className={styles.HomePage_introSection_image}
                />
                <p className={styles.HomePage_introSection_text}>
                    Hi, my name is Kat (Katherine) Fotopoulos - she/her - and I
                    am a full spectrum doula in middle Tennessee who supports
                    people in navigating their reproductive experiences.
                </p>
            </section>
            <section className={styles.HomePage_servicesContainer}>
                {servicesData.map((s) => {
                    if (s.title !== "Birth and Postpartum Support Bundles") {
                        return (<ServicesTile
                            key={s.title}
                            title={s.title}
                            text={s.text}
                            image={s.image}
                            anchor={s.anchor}
                        />);
                    }
                })}
            </section>
            <section className={styles.HomePage_notSure}>
                <p className={styles.HomePage_notSure_text}>Not sure if a Doula is right for you? Check out our FAQs</p>
                <LinkButton className={styles.HomePage_notSure_button} url="/faq" text="FAQ" />
            </section>
        </main>
    );
}
