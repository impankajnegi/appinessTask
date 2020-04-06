import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from "axios/index";

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: {
        first_name: "",
        last_name: "",
        username: "",
        password: "",
      },
    };

    this.setFieldValue = this.setFieldValue.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  setFieldValue(e, item) {
    let value = e.target.value;
    if (item == "username") {
      this.setState((prevState) => ({
        User: {
          // object that we want to update
          ...prevState.User, // keep all other key-value pairs
          username: value, // update the value of specific key
        },
      }));
    }

    if (item == "password") {
      this.setState((prevState) => ({
        User: {
          // object that we want to update
          ...prevState.User, // keep all other key-value pairs
          password: value, // update the value of specific key
        },
      }));
    }

    if (item == "first_name") {
      this.setState((prevState) => ({
        User: {
          // object that we want to update
          ...prevState.User, // keep all other key-value pairs
          first_name: value, // update the value of specific key
        },
      }));
    }

    if (item == "last_name") {
      this.setState((prevState) => ({
        User: {
          // object that we want to update
          ...prevState.User, // keep all other key-value pairs
          last_name: value, // update the value of specific key
        },
      }));
    }
  }

  async onSignUpClick() {
    let User = this.state.User;
    const request_url = "http://localhost:5000/createUser";
    await axios
      .post(request_url, User)
      .then(
        function (response) {
          this.props.updateCurrentStatus("LogIn");
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Container maxWidth="lg">
          <FormControl>
            <InputLabel htmlFor="firstName">First Name</InputLabel>
            <Input
              value={this.state.User.first_name}
              id="firstName"
              aria-describedby="my-helper-text"
              onChange={(e) => this.setFieldValue(e, "first_name")}
              type="text"
            />
            <FormHelperText id="username-helper-text">
              Enter Your First Name
            </FormHelperText>
          </FormControl>
          <br></br>

          <FormControl>
            <InputLabel htmlFor="lastName">Last Name</InputLabel>
            <Input
              value={this.state.User.last_name}
              id="lastName"
              aria-describedby="my-helper-text"
              onChange={(e) => this.setFieldValue(e, "last_name")}
              type="text"
            />
            <FormHelperText id="username-helper-text">
              Enter Your Last Name
            </FormHelperText>
          </FormControl>
          <br></br>

          <FormControl>
            <InputLabel htmlFor="username">Email Id</InputLabel>
            <Input
              value={this.state.User.username}
              id="username"
              aria-describedby="my-helper-text"
              onChange={(e) => this.setFieldValue(e, "username")}
              type="text"
            />
            <FormHelperText id="username-helper-text">
              Enter Your Username
            </FormHelperText>
          </FormControl>
          <br></br>

          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              value={this.state.User.password}
              id="password"
              aria-describedby="my-helper-text"
              onChange={(e) => this.setFieldValue(e, "password")}
              type="text"
            />
            <FormHelperText id="username-helper-text">
              Enter Your First Name
            </FormHelperText>
          </FormControl>
          <br></br>

          <FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onSignUpClick}
            >
              Sign Up
            </Button>
          </FormControl>
        </Container>
      </React.Fragment>
    );
  }
}

export default SignUp;
