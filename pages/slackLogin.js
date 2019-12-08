import React, { useEffect } from "react";
import { fetchSlackLogin } from "../src/services/fetchSlackLogin";
import Router from "next/router";
import { defaultCipherList } from "constants";
import { withRouter } from "next/router";
import Dashboard from "./dashboard";

class slackLogin extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.location.href = "/api/slack/auth";
  }
  render() {
    return (
      <div>
        <div>
          <div>You should be redirected...</div>
        </div>
      </div>
    );
  }
}

export default slackLogin;
