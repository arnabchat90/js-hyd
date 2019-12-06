import { connect } from "react-redux";
import Dashboard from "../pages/dashboard";

export const mapDispatchToProps = dispatch => {
  return {};
};

export const mapStateToProps = state => {
  const { isLoggedin, authToken } = state.authentication;
  return {
    isLoggedin,
    authToken
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
