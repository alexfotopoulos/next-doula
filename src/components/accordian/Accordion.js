"use client";

import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Accordion.module.scss";

export function ControlledAccordion() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={styles.Accordion}>
            <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography
                        className={styles.Accordion_label}
                        sx={{
                            width: "100%",
                            flexShrink: 0,
                            fontSize: "1.6rem",
                            color: "rgb(68, 197, 176)",
                            fontWeight: "bold"
                        }}
                    >
                        What is a doula? What is a full spectrum doula?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.Accordion_content}
                        sx={{ fontSize: "1.6rem" }}
                    >
                        If you’ve heard the word “doula” before, you may think
                        that a doula solely helps people in childbirth. However,
                        a doula can provide support in many different kinds of
                        situations. During my training, I loved learning and
                        thinking of what a doula does as “care work” and some
                        doulas refer to themselves as “care workers” rather than
                        doulas, especially if they decide not to obtain a formal
                        doula certification. Doulas support people in a wide
                        variety of life (and even death) experiences - from
                        preconception support to birth, postpartum, or
                        end-of-life care, just to name a few. A full spectrum
                        doula typically provides one or more types of care and
                        advocates equal support for people across the spectrum
                        of identities from race to gender and beyond, and across
                        the spectrum of life experiences including abortion and
                        adoption. Support can take a physical, mental, and/or
                        emotional form.
                        <br />
                        <br />
                        This{" "}
                        <a
                            className={styles.ExternalLink}
                            href="https://www.plannedparenthood.org/blog/what-is-a-doula"
                            target="_blank"
                        >
                            blog post from Planned Parenthood
                        </a>{" "}
                        does a good job of providing more detail about what a
                        doula is and does.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                >
                    <Typography
                        className={styles.Accordion_label}
                        sx={{
                            width: "100%",
                            flexShrink: 0,
                            fontSize: "1.6rem",
                            color: "rgb(68, 197, 176)",
                            fontWeight: "bold"
                        }}
                    >
                        What are the benefits of having a doula?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.Accordion_content}
                        sx={{ fontSize: "1.6rem" }}
                    >
                        Depending on the type of service for which you’re
                        seeking a doula’s support, the benefits of that support
                        can vary greatly. Support can be in-person or virtual.
                        Generally, a doula assists with: Education on specific
                        topics such as preparing for conception, childbirth,
                        postpartum, etc. Creating a birth plan Physical and
                        emotional support during labor and birth, including
                        advocating for yourself Physical, mental, and emotional
                        support during postpartum Navigating unexpected or
                        planned pregnancy loss
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                >
                    <Typography
                        className={styles.Accordion_label}
                        sx={{
                            width: "100%",
                            flexShrink: 0,
                            fontSize: "1.6rem",
                            color: "rgb(68, 197, 176)",
                            fontWeight: "bold"
                        }}
                    >
                        What is the difference between a doula and a midwife?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.Accordion_content}
                        sx={{ fontSize: "1.6rem" }}
                    >
                        Doulas and midwives provide different levels and types
                        of care, though they both often work in the world of
                        pregnancy, labor and birth support. While a midwife is a
                        trained medical professional, a doula can use this title
                        with or without formal training or certification and
                        there is no particular independent body or bodies
                        governing or overseeing doulas. Most midwives in the US
                        are CNM’s (Certified Nurse Midwives) who are certified
                        through the{" "}
                        <a
                            className={styles.ExternalLink}
                            href="https://www.amcbmidwife.org/"
                            target="_blank"
                        >
                            American Midwifery Certification Board
                        </a>{" "}
                        or CPM’s (Certified Professional Midwives) who are
                        certified by the <a
                            className={styles.ExternalLink}
                            href="https://narm.org/"
                            target="_blank"
                        >North American Registry of Midwives</a>.
                        Midwives can do many of the same things as doctors in
                        caring for people during pregnancy, labor and delivery
                        such as deliver a baby vaginally, resuscitate a baby,
                        stitch minor tears, etc. Doulas - unless also trained as
                        midwives - do not perform these types of medical
                        procedures, but rather assist pregnant people in
                        non-medical ways such as in planning for birth and
                        postpartum, providing physical support in the form of
                        comfort measures during labor, body positioning during
                        pregnancy, labor and birth, and emotional support after
                        birth, to name a few examples.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel4bh-content"
                    id="panel4bh-header"
                >
                    <Typography
                        className={styles.Accordion_label}
                        sx={{
                            width: "100%",
                            flexShrink: 0,
                            fontSize: "1.6rem",
                            color: "rgb(68, 197, 176)",
                            fontWeight: "bold"
                        }}
                    >
                        Is a doula covered by insurance?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography
                        className={styles.Accordion_content}
                        sx={{ fontSize: "1.6rem" }}
                    >
                        Despite <a
                            className={styles.ExternalLink}
                            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6265610/"
                            target="_blank"
                        >growing research about the significant impact doula care can make on maternal morbidity and mortality rates</a>, especially in certain geographic regions and among Black mothers, most insurance plans unfortunately do not cover doula services, nor CPM services for that matter. However, it is always a good idea to check your specific insurance plan! <a
                        className={styles.ExternalLink}
                        href="https://www.uhccommunityandstate.com/content/topic-profiles/executive-summaries/doula-care-now-covered-by-medicaid-in-several-states"
                        target="_blank"
                    >Some doula care is now covered by Medicaid in several states</a>.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}
