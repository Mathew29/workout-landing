import React, { Component } from "react";

import Input from "../UI/Input/Input";
import classes from  "./SignUp.module.css";

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
            },
            lastName: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Last Name..."
                },
                value: "",
                validaton: {
                    required: true,
                },
                valid: false,
                touched: false,
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Email..."
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

    checkValidity(value, rules) {
        let isValid = true;
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
        }

        if (rules.minLength && rules.maxLength) {
            isValid = value.length >= rules.minLength && value.length <= rules.maxLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedSignUpForm = {
          ...this.state.signUpForm,
        };
        const updatedFormElement = {
          ...updatedSignUpForm[inputIdentifier],
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(
          updatedFormElement.value,
          updatedFormElement.validation
        );
        updatedFormElement.touched = true;
        updatedSignUpForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for (let inputIdentifier in updatedSignUpForm) {
          formIsValid = updatedSignUpForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({ signUpForm: updatedSignUpForm, formIsValid: formIsValid });
      };

      render() {
        const formElementsArray = [];
        for (let key in this.state.signUpForm) {
            formElementsArray.push({
                id: key,
                config: this.state.signUpForm[key],
            });
        }
        let form = (
            <form onSubmit={this.signUpForm}>
                {formElementsArray.map((formElement) => (
                    <Input
                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    shouldValidate={formElement.config.validation}
                    invalid={!formElement.config.valid}
                    touched={formElement.config.touched}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                     />
                ))}

            </form>
        );
        return (
            <div className={classes.SignUp} >
                <h4>Sign Up</h4>
                {form}
            </div>
        )
      }
}

export default SignUp;