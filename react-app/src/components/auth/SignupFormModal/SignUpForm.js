import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../../store/session';
import DemoButton from '../DemoButton';
import LoginFormModal from '../LoginFormModal';

const SignUpForm = () => {
  const [errors, setErrors] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [image, setImage] = useState(null);
	const [imageLoading, setImageLoading] = useState(false);
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    const formData = new FormData();
		if (password === repeatPassword) {
			formData.append("username", username);
			formData.append("email", email);
			formData.append("password", password);
			if (image) {
				formData.append("image", image);
				setImageLoading(true);
			}
			const data = await dispatch(signUp(formData));
			setImageLoading(false);
			if (data) {
				const errors = {};
				const dataArr = data.map((error) => error.split(":"));

				for (let i = 0; i < dataArr.length; i++) {
					errors[dataArr[i][0]] = dataArr[i][1];
				}

				setErrors(errors);
				setImageLoading(false);
				return;
			}
		} else {
			const errors = {};
			errors["password"] = "Passwords do not match.";
			setErrors(errors);
			return;
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

  const updateImage = (e) => {
		const file = e.target.files[0];
		setImage(file);
	};

  // clean up for memory leaks
  useEffect(() => {
		return () => {
			setErrors({});
			setUsername("");
			setEmail("");
			setPassword("");
			setRepeatPassword("");
			setImage(null);
			setImageLoading(false);
		};
	}, []);

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

      <div className="upload-image-container">
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          onChange={updateImage}
        ></input>
        <div className="preview-image-container">
          {image && (
            <img
            alt="preview"
            src={URL.createObjectURL(image)}
            className="preview-image"
            ></img>
            )}
        </div>
        <label htmlFor="file-upload">Add a Profile Picture</label>
        {imageLoading && (
          <p>
            <i className="fas fa-spinner fa-pulse"></i>
          </p>
        )}

      </div>
      <button className='login-submit-btn' type='submit'>Sign Up</button>
      <DemoButton />
      <LoginFormModal text="Already have an account?" />
    </form>
  );
};

export default SignUpForm;
