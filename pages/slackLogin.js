import React, { useEffect } from "react";
import { fetchSlackLogin } from "../src/services/fetchSlackLogin";

export default function slackLogin() {
  useEffect(() => {
    async function fetchAuth() {
      // You can await here
      //   const response = await fetchSlackLogin();
      window.location.href = "/api/slack/auth";
    }
    fetchAuth();
  }, []); // Or [] if effect doesn't need props or state
  return <div>You should be redirected to slack login...</div>;
}
