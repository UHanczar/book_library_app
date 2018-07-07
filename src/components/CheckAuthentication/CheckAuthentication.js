// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const CheckAuthentication = (ComposedComponent: any) => {
  type Props = {
    authenticated: boolean,
    history: {
      replace: Function
    }
  };

  class Authentication extends Component<Props> {
    componentDidMount() {
      if (this.props.authenticated) {
        this.props.history.replace('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.props.history.replace('/');
      }
    }

    render() {
      return (<ComposedComponent {...this.props} />);
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.authenticated };
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired,
    history: PropTypes.shape({
      replace: PropTypes.func
    }).isRequired
  };

  return withRouter(connect(mapStateToProps)(Authentication));
};

export default CheckAuthentication;
