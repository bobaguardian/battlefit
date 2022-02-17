import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';

import DemoButton from '../DemoButton';

const LoginForm = () => {
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      const errors = {};
      for (let i = 0; i < data.length; i++) {
        const error = data[i].split(": ");
        errors[error[0]] = error[1]
			}
			setErrors(errors);
			return;
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <form className="login-form" onSubmit={onLogin}>
      <h2>Log Into BattleFit</h2>
      <div className="form-group">
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={email}
          onChange={updateEmail}
          required={true}
        />
        <div className="errors-container">
					{errors.email ? `${errors.email}` : ""}
				</div>
      </div>
      <div className="form-group">
        <input
          name='password'
          type='password'
          placeholder='Password'
          value={password}
          onChange={updatePassword}
          required={true}
        />
        <div className="errors-container">
					{errors.password ? `${errors.password}` : ""}
				</div>
      </div>
      <button className='login-submit-btn' type='submit'>Login</button>
      <DemoButton />
    </form>
  );
};

export default LoginForm;
