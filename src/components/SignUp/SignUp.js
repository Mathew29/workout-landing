import React, { Component } from "react";

import classes from  "./SignUp.css";

class SignUp extends Component {
    state = {
        signUpForm: {
            firstName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "First Name..."
                },
                value: "",
                validation: {
                    required: true,
                },
                valid: false,
                touched: false,
            }
        }
    }
}