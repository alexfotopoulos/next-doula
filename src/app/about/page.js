import Image from "next/image";
import styles from "../../../styles/pagestyles/about.module.scss";
import LinkButton from "@/components/linkButton/LinkButton";

export default function AboutPage() {
    return (
        <main>
            <section className={styles.AboutPage_introSection}>
                <Image
                    src="/images/katherine_about_heading.JPG"
                    width={500}
                    height={500}
                    alt="Katherine and her daughter Andi"
                    className={styles.AboutPage_introSection_image}
                />
                <p className={styles.AboutPage_introSection_text}>
                    Hi, my name is Kat (Katherine) Fotopoulos - she/her - and I
                    am a full spectrum doula in middle Tennessee who supports
                    people in navigating their reproductive experiences.
                </p>
            </section>
            <section className={styles.AboutPage_infoSection}>
                <h2 className={styles.AboutPage_infoSection_heading}>
                    A Little Bit About Me
                </h2>
                <div className={styles.AboutPage_infoSection_textContainer}>
                    <p className={styles.AboutPage_infoSection_text}>
                        I offer many different kinds of doula support including
                        birth - with a particular interest in supporting those who
                        are birthing people of size, seeking a VBAC, and/or an
                        out-of-hospital birth – postpartum, and more. I believe that
                        all birthing people should be supported in choosing when,
                        how, and where they birth and beyond.
                        <br />
                        <br />
                        As a mom of three, I’ve navigated the course of full-term
                        pregnancy, birth, and postpartum three times and have had
                        vastly different experiences each time. Along the way, I
                        learned what it means to advocate for myself, that I have a
                        choice and a say in my healthcare and reproductive journey,
                        and that all people deserve to feel empowered in using their
                        voice and making those decisions for themselves as well.
                        <br />
                        <br />
                        After a very long labor, and a traumatic and unexpected
                        cesarean birth with my first baby, I spent a lot of time
                        working to heal myself and prepare for my second birth,
                        which was an unmedicated VBAC (vaginal birth after
                        cesarean). During my second pregnancy, my doula organized a
                        30 minute Zoom call with the two backup doulas who were
                        going to be on standby in case my primary doula for some
                        reason was not available at the time I went into labor. At
                        the end of the call, one of the backup doulas said, “Kat, I
                        just have one last question… have you ever considered being
                        a doula yourself?”
                        <br />
                        <br />I didn’t “grow up” thinking that I would become a
                        doula, but it makes sense that I would end up in care work.
                        If you’re familiar with the Myers-Briggs personality types,
                        I am an ENFJ (and if you’re not familiar, here’s a{" "}
                        <a
                            className={styles.ExternalLink}
                            href="https://www.16personalities.com/free-personality-test"
                            target="_blank"
                        >
                            link
                        </a>{" "}
                        to take the test yourself and learn more about your
                        personality type! You can also read more about mine{" "}
                        <a
                            className={styles.ExternalLink}
                            href="https://www.16personalities.com/enfj-personality"
                            target="_blank"
                        >
                            here
                        </a>
                        .)
                        <br />
                        <br />
                        Originally from Tampa, FL, I went to the University of Miami
                        and obtained a Bachelor’s in Business Administration in
                        Accounting and then returned to Tampa to attend the
                        University of South Florida where I received my Masters in
                        Accountancy. I returned to Miami where I began a career in
                        public accounting and obtained my CPA license. As a
                        (now-recovering) perfectionist, I experienced burnout in the
                        high-demand, high-stress public accounting environment after
                        3 years, traveled across Europe for 2 months with my
                        brother, and then took a Corporate job in Technical
                        Accounting in South Florida. It was during this time period
                        that I discovered the 16 personalities site linked above,
                        and while I have always loved to read and learn, and to this
                        day LOVE a good spreadsheet to organize my thoughts and
                        perform analyses, I laughed when I read that “When it comes
                        to choosing a career, Protagonists (ENFJs) find fulfillment
                        in doing what they love most – helping other people… and
                        should not be stuck sitting in front of computers and
                        working with spreadsheets all day.”
                        <br />
                        <br />
                        Don’t get me wrong - I also always loved math, have a very
                        analytical brain, and to be quite honest, much of my
                        accounting career centered around my ability to read and
                        interpret technical guidance; communicate and coordinate
                        effectively with others; to learn, lead and coach others;
                        and have difficult conversations in a productive way. When I
                        decided to study accounting in college, I remember one of my
                        best friends joking, “But you’re too fun to be an
                        accountant!” Accountancy has come along way since the
                        1980s’s boring stuffy shapeless business suits and
                        briefcases stuffed with calculators and pencils. But I
                        digress…
                        <br />
                        <br />I still perform work in both fields - accounting and
                        doula/care work. Having learned my lessons about burnout,
                        which can also occur very easily in the world of doula work,
                        I find this balance gives me the ability to do the things
                        I’m passionate about and also support my family. I really do
                        love working with people and I feel strongly about how
                        important and lacking the “care” is in most “healthcare”.
                        During my second postpartum journey, I made the decision to
                        start doing doula work and signed up for a full spectrum
                        doula training through BADT (Birth Advocacy Doula
                        Trainings).
                    </p>
                </div>
                <LinkButton text="Read more about my birth stories here" url="/blog" />
            </section>
            <section className={styles.AboutPage_approachSection}>
                <h2 className={styles.AboutPage_approachSection_heading}>
                    My Approach to Care Work
                </h2>
                <p className={styles.AboutPage_approachSection_text}>
                    I chose to train and certify through BADT at the advice of
                    my own doula who I hired through a local, inclusive,
                    female-owned agency that aligned with a lot of my own
                    personal views. She suggested BADT - which is a Black-owned,
                    queer-run doula training organization - versus other options
                    for doula training and certification because of their
                    commitment to and focus on “Care. Choice. Justice.“ You can
                    read more about BADT’s{" "}
                    <a
                        className={styles.ExternalLink}
                        href="https://www.badoulatrainings.org/vision"
                        target="_blank"
                    >
                        vision
                    </a>{" "}
                    and{" "}
                    <a
                        className={styles.ExternalLink}
                        href="https://www.badoulatrainings.org/"
                        target="_blank"
                    >
                        offerings
                    </a>{" "}
                    to better understand my approach to doula work.
                </p>
                <div>
                    <a href="https://www.badt.directory/tennessee/nashville/doula/katherine-kat-fotopoulos?from=badge" title="Find me on Birthing Advocacy Doula Trainings | Birthworker Directory" target="_blank"><img className={styles.AboutPage_approachSection_badt} src="/images/CertifiedDoulaGraphic.png" border="0" /> </a>
                </div>
            </section>
        </main>
    );
}
