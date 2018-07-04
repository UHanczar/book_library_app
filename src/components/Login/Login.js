import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './login.scss';
import { validateLoginFormErrors } from '../../helpers/helpers';
import Loader from '../Loader/Loader';

class Login extends Component {
  render() {
    const {
      handleSubmit,
      loginUser,
      user,
      history,
      login
    } = this.props;

    return (
      <div className='login__container'>
        <div className='form__container'>
          {user.loading ? (<Loader />) : (
            <form onSubmit={handleSubmit(() => loginUser(history))} className='submit-form'>
              <div className='login-field'>
                <Field
                  name='login'
                  id='login'
                  component='input'
                  className='input-field'
                  type='text'
                  placeholder='login'
                />
                {login && login.fields && login.fields.login && login.fields.login.touched && login.syncErrors && login.syncErrors.login && <span className='helper-text helper-text-wrong' data-error='wrong' data-success='right'>Enter valid login</span>}
              </div>
              <div className='password-field'>
                <Field
                  name='password'
                  component='input'
                  type='password'
                  placeholder='Password'
                />
                {login && login.fields && login.fields.password && login.fields.password.touched && login.syncErrors && login.syncErrors.password && <span className='helper-text helper-text-wrong' data-error='wrong' data-success='right'>Enter valid password</span>}
              </div>
              <button
                className='btn light-blue lighten-2'
                name='action'
                type='submit'
                disabled={user.loading}
              >
                Submit
                <i className='material-icons right'>send</i>
              </button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  loginUser: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login',
  validate: validateLoginFormErrors
})(Login);
