//initial state for contact form data
export const initialState = {
    service: "",
    dueDate: "",
    dueDateRequired: true,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    pronouns: "",
    partnerFirstName: "",
    partnerLastName: "",
    partnerPronouns: "",
    careProvider: "",
    birthingPlace: "",
    city: "",
    zipCode: "",
    additionalInformation: "",
};

//function to validate submitted form data
export function validateFormData(data) {
    const errors = [];
    const services = [
        "postpartum support",
        "birth support",
        "pregnancy loss",
        "abortion support",
    ];

    if (!services.includes(data.service)) {
        errors.push("service");
    }
    if (data.dueDateRequired && data.dueDate.trim() === "") {
        errors.push("dueDate");
    }
    if (data.firstName.trim() === "") {
        errors.push("firstName");
    }
    if (data.lastName.trim() === "") {
        errors.push("lastName");
    }
    if (data.email.trim() === "") {
        errors.push("email");
    }
    if (data.phoneNumber.trim() === "") {
        errors.push("phoneNumber");
    }
    if (data.birthingPlace.trim() === "") {
        errors.push("birthingPlace");
    }
    if (data.city.trim() === "") {
        errors.push("city");
    }
    if (data.zipCode.trim() === "") {
        errors.push("zipCode");
    }

    return errors;
}
