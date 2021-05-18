import React, { useState } from "react";
import axios from "axios";


const useSignUpForm = (callback) => {
    const [success, setSuccess] = useState(false);
    const [inputs, setInputs] = useState({});
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const handleSubmit = (event) => {
        if (event) {
        event.preventDefault();
        }
    };
    const handleInputChange = (event) => {
        event.persist();
        setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
        }));
    };
    let payLoad = {
        name: firstName + " " + lastName,
        email: email,
        message: message,
        };
    axios({
        method: "POST",
        url: "http://localhost:9000/emailSender.js",
        data: payLoad,
    }).then((response) => {
        if (response.data.status === "success") {
        alert("Message Sent.");
        setSuccess(true);
        this.resetForm();
        } else if (response.data.status === "fail") {
        alert("Message failed to send.");
        }
    });
    return {
        handleSubmit,
        handleInputChange,
        inputs,
    };
};
export default useSignUpForm;
