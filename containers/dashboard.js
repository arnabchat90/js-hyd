import { connect } from "react-redux";
import Dashboard from "../pages/dashboard";

export const mapDispatchToProps = dispatch => {
  return {};
};

export const mapStateToProps = state => {
  const { isLoggedIn, authToken, user } = state.authentication;
  return {
    isLoggedIn,
    authToken,
    user
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
