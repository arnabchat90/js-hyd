import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MuiLink from "@material-ui/core/Link";
import ProTip from "../src/ProTip";
import Link from "../src/Link";
import Dashboard from "./dashboard";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"js-user-group-hyderabad © "}
      <MuiLink color="inherit" href="https://js-user-group-hyd.com">
        js-user-group-hyderabad
      </MuiLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Index() {
  return <Dashboard />;
}
