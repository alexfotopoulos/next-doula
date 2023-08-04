import Image from "next/image";
import styles from "../../../styles/pagestyles/about.module.scss";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div>
            <div className={styles.AboutPage_imageSection}>
                <Image 
                    src="/images/katherine_about_heading.JPG"
                    width={500}
                    height={500}
                    alt="Katherine and her daughter Andi"
                    className={styles.AboutPage_image}
                />
                <p className={styles.AboutPage_imageInfoText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo quam ab suscipit ex dignissimos. Recusandae, labore temporibus eaque consequatur maiores sed aliquam adipisci eos provident assumenda quis, sapiente nobis. Debitis!</p>
            </div>
            <section className={styles.AboutPage_introSection}>
                <h1 className={styles.AboutPage_introSection_heading}>
                    Kateranaki Fotopoulaki
                </h1>
                <p className={styles.AboutPage_introSection_info}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Recusandae eligendi ab aspernatur deserunt. Quo, autem odio,
                    perspiciatis mollitia atque, aut sequi placeat alias cum
                    pariatur a voluptates sapiente officia quas.
                </p>
            </section>
            <section className={styles.AboutPage_infoSection}>
                <h2 className={styles.AboutPage_infoSection_heading}>
                    A little bit about me
                </h2>
                <p className={styles.AboutPage_infoSection_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt fuga, nam consequuntur obcaecati optio quaerat
                    voluptatum molestias aspernatur maxime aperiam perferendis
                    harum et facilis ratione maiores in unde ducimus delectus.
                    Consectetur voluptatem nihil fugiat placeat totam eum vitae
                    sequi ad iusto error rerum iste non aliquam aliquid
                    excepturi a nostrum, adipisci quam odio blanditiis. Officia
                    voluptates in ipsa nisi libero. Deserunt modi distinctio
                    porro a laboriosam repellendus dicta et, corrupti cum ullam
                    necessitatibus, reiciendis officia quas iste debitis ipsa
                    commodi ex non praesentium sint animi. Eligendi, ipsum
                    consequuntur! Voluptatem, modi! Quibusdam officiis nisi
                    consequatur sint accusamus quo officia, corrupti dolorum
                    doloribus, eligendi deleniti delectus, velit nostrum
                    molestias porro eos. Blanditiis nobis magnam alias accusamus
                    animi rerum sit laboriosam aliquid temporibus. Est illo
                    accusamus, ex cum possimus perferendis eligendi reiciendis
                    praesentium autem obcaecati a deleniti consequuntur minus,
                    unde asperiores voluptates aliquam laboriosam sapiente.
                    Repudiandae pariatur modi sunt laborum fugit. Quis, vitae?
                </p>
                <Link href="/blog" className={styles.AboutPage_infoSection_blogLink}>
                    Read about my birth stories here
                </Link>
            </section>
            <section className={styles.AboutPage_approachSection}>
                <h2 className={styles.AboutPage_approachSection_heading}>
                    My approach to care work
                </h2>
                <p className={styles.AboutPage_approachSection_text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, voluptatum. Architecto officiis quis, dolores exercitationem consequuntur rerum autem labore ipsa amet fugit voluptatum corrupti dolor magni odit unde quasi iste!
                    Hic, minima repellat sed earum autem sapiente et optio eum minus magni. Alias, dolorum! Sunt, hic obcaecati error nobis vel voluptatibus animi, possimus ad, debitis necessitatibus incidunt quod corrupti fuga?
                    Mollitia est ea ipsum perferendis velit ab iste quisquam blanditiis omnis suscipit, exercitationem qui impedit dicta, hic voluptatum maxime? Aliquam atque illo incidunt sed deleniti, magni nostrum! Quidem, culpa harum.
                    Odit harum libero eius deleniti cum perspiciatis vero quas veritatis? Excepturi officiis fugiat in saepe consectetur odio voluptas atque iste perspiciatis. Amet eligendi harum distinctio recusandae repellat? Ea, eos sit!
                </p>
            </section>
        </div>
    );
}
