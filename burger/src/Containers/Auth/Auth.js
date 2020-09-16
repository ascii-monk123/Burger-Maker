import React, { Component } from "react";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import Classes from "./Auth.module.css";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your email",
        },
        value: "",
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: "input",
        elementConfig: {
          type: "password",
          placeholder: "Password",
        },
        value: "",
        validation: {
          required: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignUp: true,
  };
  checkValidity = (value, rules) => {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== "" && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    if (rules.isEmail) {
      const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      isValid = reg.test(value);
    }
    return isValid;
  };
  inputChangedHandler = (e, controlName) => {
    const updatedControls = {
      ...this.state.controls,
      [controlName]: {
        ...this.state.controls[controlName],
        value: e.target.value,
        valid: this.checkValidity(
          e.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      },
    };
    this.setState({
      controls: updatedControls,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    this.props.onAuth(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignUp
    );
  };
  switchAuthModeHandler = () => {
    this.setState((prevState) => {
      return {
        isSignUp: !prevState.isSignUp,
      };
    });
  };
  render() {
    const formElementsArr = [];
    for (let keys in this.state.controls) {
      formElementsArr.push({
        id: keys,
        config: this.state.controls[keys],
      });
    }
    const form = formElementsArr.map((formElement) => (
      <Input
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        key={formElement.id}
        value={formElement.config.value}
        changed={(event) => this.inputChangedHandler(event, formElement.id)}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
      />
    ));
    return (
      <div className={Classes.Auth}>
        <form onSubmit={this.submitHandler}>
          {form}
          <Button buttonType="Success">Submit</Button>
        </form>
        <Button buttonType="Danger" clicked={this.switchAuthModeHandler}>
          {this.state.isSignUp ? "Sign In" : "Sign Up"}
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (email, password, isSignUp) =>
      dispatch(actions.auth(email, password, isSignUp)),
  };
};

export default connect(null, mapDispatchToProps)(Auth);
