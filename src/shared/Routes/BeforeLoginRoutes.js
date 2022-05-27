import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BeforeLoginRoutes = ({
  component: Component,
  redirectTo,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      loading ? (
        <div>Loading..</div>
      ) : isAuthenticated ? (
        <Redirect to={redirectTo ? redirectTo : "/dashboard"} />
      ) : (
        <Component {...props} />
      )
    }
  />
);

BeforeLoginRoutes.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(BeforeLoginRoutes);
