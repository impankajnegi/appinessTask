import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import axios from "axios/index";
import Alert from '@material-ui/lab/Alert';

export class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      credentials: {
        username: "",
        password: "",
      },
    };

    this.setCredential = this.setCredential.bind(this);
    this.onLoginClick = this.onLoginClick.bind(this);
  }

  setCredential(e, item) {
    let value = e.target.value;
    if (item == "username") {
      this.setState((prevState) => ({
        credentials: {
          // object that we want to update
          ...prevState.credentials,
          username: value, 
        },
      }));
    } else
      this.setState((prevState) => ({
        credentials: {
          // object that we want to update
          ...prevState.credentials,
          password: value, 
        },
      }));
  }

  async onLoginClick(credentials) {
    debugger;

    const request_url = "http://localhost:5000/authenticateUser";

    await axios
      .post(request_url, credentials)
      .then(
        function (response) {
          debugger;
          if (response.data.length > 0 && response.data[0].user_type == "Admin")
            this.props.updateCurrentStatus("AdminLoginSuccess");
          else if (
            response.data.length > 0 &&
            response.data[0].user_type != "Admin"
          )
            this.props.updateCurrentStatus("LoginSuccess");
        }.bind(this)
      )
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
              <Alert severity="success">Log In to proceed further.</Alert>
        <Container maxWidth="sm">
          <FormControl>
            <InputLabel htmlFor="username">Email address</InputLabel>
            <Input
              value={this.state.credentials.username}
              id="username"
              aria-describedby="my-helper-text"
              onChange={(e) => this.setCredential(e, "username")}
              type="email"
            />
            <FormHelperText id="username-helper-text">
              Enter Your username
            </FormHelperText>
          </FormControl>
          <br></br>
          <FormControl>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              type="password"
              id="password"
              aria-describedby="my-helper-text"
              value={this.state.credentials.password}
              onChange={(e) => this.setCredential(e, "password")}
            />
            <FormHelperText id="password-helper-text">
              enter your password
            </FormHelperText>
          </FormControl>
          <br />
          <FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.onLoginClick(this.state.credentials)}
            >
              Log In
            </Button>
          </FormControl>
        </Container>
      </React.Fragment>
    );
  }
}

export default LogIn;
