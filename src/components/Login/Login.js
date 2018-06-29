import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

import './login.scss';

class Login extends Component {
  render() {
    const { handleSubmit, loginUser } = this.props;

    return (
      <div className='login__container'>
        <div className='form__container'>
          <form onSubmit={handleSubmit(loginUser)} className='submit-form'>
            <div>
              <Field
                name='login'
                id='login'
                component='input'
                className='input-field'
                type='text'
                placeholder='login'
              />
            </div>
            <div>
              <Field
                name='password'
                component='input'
                type='password'
                placeholder='Password'
              />
            </div>
            <button
              className='btn light-blue lighten-2'
              name='action'
              type='submit'
            >
              Submit
              <i className='material-icons right'>send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
