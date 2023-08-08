"use client";

import { useState, useEffect } from "react";
import styles from "./ContactForm.module.scss";
import {
    initialState,
    validateFormData,
} from "../../../helpers/contactFormHelpers";

export default function ContactForm() {
    //state to track input changes from user
    const [formData, setFormData] = useState(initialState);
    //state to track errors
    const [errors, setErrors] = useState([]);

    //function to update formData state
    function handleFormUpdate(identifier, value) {
        //create new empty object
        let updatedValue = {};
        //assign identifier as key and value
        updatedValue[identifier] = value;
        setFormData((prevFormData) => {
            //return new object containing previous values and updated value
            return { ...prevFormData, ...updatedValue };
        });
    }

    //funtion to handle form submission
    async function submitHandler(event) {
        event.preventDefault();
        let validationErrors = validateFormData(formData);
        if (validationErrors.length > 0) {
            setErrors(validationErrors);
        } else {
            const sendMail = await fetch("/api/sendmail", {
                method: "post",
                body: JSON.stringify(formData),
                headers: {
                    "Content-type": "application/json"
                }
            });
            const response = await sendMail.json();
            console.log(response);
        }
    }

    //logic to determine if due date is required (based on service - only true if postpartum support or birth support are selected)
    useEffect(() => {
        if (
            formData.service === "pregnancy loss" ||
            formData.service === "abortion support"
        ) {
            setFormData((prevFormData) => {
                return { ...prevFormData, dueDateRequired: false };
            });
        } else {
            setFormData((prevFormData) => {
                return { ...prevFormData, dueDateRequired: true };
            });
        }
    }, [formData.service]);

    return (
        <form className={styles.ContactForm} onSubmit={submitHandler}>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="service"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        What service are you most interested in?{" "}
                        <span style={{ color: "red" }}>*</span>
                    </label>
                    <select
                        name="service"
                        id="service"
                        className={styles.ContactForm_select}
                        required
                        onChange={(event) =>
                            handleFormUpdate("service", event.target.value)
                        }
                    >
                        <option value="" disabled selected>
                            Please select a service
                        </option>
                        <option value="postpartum support">
                            Postpartum support
                        </option>
                        <option value="birth support">Birth support</option>
                        <option value="pregnancy loss">
                            Pregnancy loss support
                        </option>
                        <option value="abortion support">
                            Abortion support
                        </option>
                    </select>
                </div>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="dueDate"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        Estimated due date
                        {formData.dueDateRequired && (
                            <span style={{ color: "red" }}>*</span>
                        )}
                    </label>
                    <input
                        className={styles.ContactForm_input_date}
                        type="date"
                        name="dueDate"
                        id="dueDate"
                        value={formData.dueDate}
                        onChange={(event) =>
                            handleFormUpdate("dueDate", event.target.value)
                        }
                        required={formData.dueDateRequired && "required"}
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="firstName"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        First Name {<span style={{ color: "red" }}>*</span>}
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={formData.firstName}
                        placeholder="Please provide your first name"
                        onChange={(event) =>
                            handleFormUpdate("firstName", event.target.value)
                        }
                        required
                    />
                </div>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="lastName"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        Last Name <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="lastName"
                        id="lastName"
                        placeholder="Please provide your last name"
                        value={formData.lastName}
                        onChange={(event) =>
                            handleFormUpdate("lastName", event.target.value)
                        }
                        required
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="email"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        Email <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please provide your email"
                        value={formData.email}
                        onChange={(event) =>
                            handleFormUpdate("email", event.target.value)
                        }
                        required
                    />
                </div>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="phone"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        Phone Number <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="XXX-XXX-XXXX"
                        value={formData.phoneNumber}
                        onChange={(event) =>
                            handleFormUpdate("phoneNumber", event.target.value)
                        }
                        required
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="pronouns"
                    >
                        Your pronouns
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="pronouns"
                        id="pronouns"
                        value={formData.pronouns}
                        onChange={(event) =>
                            handleFormUpdate("pronouns", event.target.value)
                        }
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="partnerFirstName"
                    >
                        Your partner's first name {"(if applicable)"}
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="partnerFirstName"
                        id="partnerFirstName"
                        placeholder="Partner's first name"
                        value={formData.partnerFirstName}
                        onChange={(event) =>
                            handleFormUpdate(
                                "partnerFirstName",
                                event.target.value
                            )
                        }
                    />
                </div>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="partnerLastName"
                    >
                        Your partner's last name {"(if applicable)"}
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="partnerLastName"
                        id="partnerLastName"
                        placeholder="Partner's last name"
                        value={formData.partnerLastName}
                        onChange={(event) =>
                            handleFormUpdate(
                                "partnerLastName",
                                event.target.value
                            )
                        }
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="partnerPronouns"
                    >
                        Your partner's pronouns
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="partnerPronouns"
                        id="partnerPronouns"
                        value={formData.partnerPronouns}
                        onChange={(event) =>
                            handleFormUpdate(
                                "partnerPronouns",
                                event.target.value
                            )
                        }
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="careProvider"
                    >
                        Care provider
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="careProvider"
                        id="careProvider"
                        placeholder="Name of OB, midwife, or group practice"
                        value={formData.careProvider}
                        onChange={(event) =>
                            handleFormUpdate("careProvider", event.target.value)
                        }
                    />
                </div>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="birthingPlace"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        Birthing Place <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="birthingPlace"
                        id="birthingPlace"
                        placeholder="Name of hospital, birthing center, or at home if known"
                        value={formData.birthingPlace}
                        onChange={(event) =>
                            handleFormUpdate(
                                "birthingPlace",
                                event.target.value
                            )
                        }
                        required
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="city"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        City <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="city"
                        id="city"
                        placeholder="City you live in"
                        onChange={(event) =>
                            handleFormUpdate("city", event.target.value)
                        }
                        value={formData.city}
                        required
                    />
                </div>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="zipCode"
                        style={{
                            color: errors.includes("service") ? "red" : "#3C4443",
                        }}
                    >
                        Zip code <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                        className={styles.ContactForm_input}
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        placeholder="Zip code"
                        value={formData.zipCode}
                        onChange={(event) =>
                            handleFormUpdate("zipCode", event.target.value)
                        }
                        required
                    />
                </div>
            </div>
            <div className={styles.ContactForm_row}>
                <div className={styles.ContactForm_inputGroup}>
                    <label
                        className={styles.ContactForm_label}
                        htmlFor="additionalInfo"
                    >
                        Additional information
                    </label>
                    <textarea
                        className={styles.ContactForm_textArea}
                        type="text"
                        name="additionalInfo"
                        id="additionalInfo"
                        placeholder="Please feel free to add any additional information you would like me to know before we connect"
                        value={formData.additionalInformation}
                        onChange={(event) =>
                            handleFormUpdate(
                                "additionalInformation",
                                event.target.value
                            )
                        }
                        rows="5"
                    ></textarea>
                </div>
            </div>
            <button className={styles.ContactForm_submitButton}>Send</button>
        </form>
    );
}
