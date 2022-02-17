import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import DemoButton from '../DemoButton';

const SignUpForm = () => {
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        const errors = {};
        for (let i = 0; i < data.length; i++) {
          const error = data[i].split(": ");
          errors[error[0]] = error[1]
        }
        setErrors(errors);
        return;
      }
    } else {
      let errors = {};
      errors.repeatPassword = "Passwords do not match.";
      setErrors(errors);
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }



  return (
    <form className="signup-form" onSubmit={onSignUp}>
      <h2>Sign Up</h2>
      <div className="form-group">
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          required={true}
          placeholder="Username"
        ></input>
        <div className="errors-container">
					{errors.username ? `${errors.username}` : ""}
				</div>
      </div>
      <div className="form-group">
        <input
          type='email'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder="Email"
          required={true}
        ></input>
        <div className="errors-container">
					{errors.email ? `${errors.email}` : ""}
				</div>
      </div>
      <div className="form-group">
        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder="Password"
          required={true}
        ></input>
        <div className="errors-container">
					{errors.password ? `${errors.password}` : ""}
				</div>
      </div>
      <div className="form-group">
        <input
          type='password'
          name='repeat_password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder="Confirm Password"
          required={true}
        ></input>
        <div className="errors-container">
					{errors.repeatPassword ? `${errors.repeatPassword}` : ""}
				</div>
      </div>
      <button className='login-submit-btn' type='submit'>Sign Up</button>
      <DemoButton />
    </form>
  );
};

export default SignUpForm;
