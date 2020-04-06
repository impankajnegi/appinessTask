import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Success from "./Success";
import AdminSuccess from "./AdminSuccess";
import ButtonAppBar from './AppBar'

export class AppContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStatus: "SignUp",
    };
    this.updateCurrentStatus = this.updateCurrentStatus.bind(this);
  }

  updateCurrentStatus(value) {
    this.setState({ currentStatus: value });
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
            <ButtonAppBar  updateCurrentStatus={this.updateCurrentStatus} currentStatus={this.state.currentStatus}></ButtonAppBar>
          {this.state.currentStatus == "SignUp" && (
            <SignUp updateCurrentStatus={this.updateCurrentStatus}></SignUp>
          )}
          {this.state.currentStatus == "LogIn" && (
            <LogIn updateCurrentStatus={this.updateCurrentStatus}></LogIn>
          )}
          {this.state.currentStatus == "AdminLoginSuccess" && (
            <AdminSuccess
              updateCurrentStatus={this.updateCurrentStatus}
            ></AdminSuccess>
          )}
          {this.state.currentStatus == "LoginSuccess" && (
            <Success updateCurrentStatus={this.updateCurrentStatus}></Success>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default AppContainer;
