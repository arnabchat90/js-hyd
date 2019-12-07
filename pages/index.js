import React from "react";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Dashboard from "../containers/dashboard";

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
