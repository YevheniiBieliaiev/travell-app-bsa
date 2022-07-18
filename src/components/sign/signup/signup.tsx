import classes from '../sign.module.scss';
import { configs } from '../../../configs';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context';
import { Form, InputBlock, Button } from '../../common';
import { Link, useNavigate } from 'react-router-dom';
import { passwordValidation, emailValidation, nameValidation } from '../../../libs';
import { saveUser } from '../../../services';



export const SignUp: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    password: ""
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const signUpHandler = (event: React.FormEvent<HTMLButtonElement>) => {
    const isName = nameValidation(form.fullName);
    const isEmail = emailValidation(form.email);
    const password = passwordValidation(form.password);

    if (isName && isEmail && password) {
      saveUser(form);
      localStorage.setItem('fullName', form.fullName);
      login();
      navigate(configs.paths.home);
    }
  }

  return (
    <main className={classes.sign__up__page}>
      <h1 className={classes.visually__hidden}>{'Travel App'}</h1>
      <Form customClassName={classes.signup__form}>
        <h2 className={classes.signup__form__title}>{'Sign Up'}</h2>

        <InputBlock
          customClasses={{
            labelClassName: classes.input,
            spanClassName: classes.input__heading
          }}
          value={form.fullName}
          id='signup-input-fullname'
          label='Full name'
          name='fullName'
          type='text'
          required={true}
          onChange={changeHandler} />

        <InputBlock
          customClasses={{
            labelClassName: classes.input,
            spanClassName: classes.input__heading
          }}
          value={form.email}
          id='signup-input-email'
          label='Email'
          name='email'
          type='email'
          required={true}
          onChange={changeHandler} />

        <InputBlock
          customClasses={{
            labelClassName: classes.input,
            spanClassName: classes.input__heading
          }}
          value={form.password}
          id='signup-input-password'
          label='Password'
          name='password'
          type='password'
          autocomplete='new-password'
          required={true}
          onChange={changeHandler} />

        <Button
          customClass={classes.button}
          type='submit'
          onClick={signUpHandler}
        >{'Sign Up'}
        </Button>
      </Form>

      <span>
        {'Already have an account? '}
        <Link className={classes.signup__form__link} to={configs.paths.signin}>{'Sign In'}</Link>
      </span>
    </main>
  )
}