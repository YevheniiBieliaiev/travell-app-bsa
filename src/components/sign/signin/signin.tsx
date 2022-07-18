import classes from '../sign.module.scss';
import { configs } from '../../../configs';
import { IFindUserResult } from '../../../data-typing';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../../context';
import { Form, InputBlock, Button } from '../../common';
import { Link, useNavigate } from 'react-router-dom';
import { emailValidation, passwordValidation } from '../../../libs';
import { findUser } from '../../../services';


export const SignIn: React.FC = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  const signInHandler = async (event: React.FormEvent<HTMLButtonElement>) => {
    const isEmail = emailValidation(form.email);
    const isPassword = passwordValidation(form.password)

    if (isEmail && isPassword) {
      const loginResult: IFindUserResult = findUser(form);
      if (!loginResult.error) {
        login();
        navigate(configs.paths.home);
        localStorage.setItem('fullName', loginResult?.name);
      }
    }
  }

  return (
    <main className={classes.sign__in__page}>
      <h1 className={classes.visually__hidden}>{'Travel App'}</h1>
      <Form customClassName={classes.signin__form}>
        <h2 className={classes.signin__form__title}>{'Sign In'}</h2>

        <InputBlock
          customClasses={{
            labelClassName: classes.input,
            spanClassName: classes.input__heading
          }}
          value={form.email}
          id='signin-input-email'
          label='Email'
          name='email'
          type='email'
          required={true}
          onChange={changeHandler}
        />

        <InputBlock
          customClasses={{
            labelClassName: classes.input,
            spanClassName: classes.input__heading
          }}
          value={form.password}
          id='signin-input-password'
          label='Password'
          name='password'
          type='password'
          autocomplete='new-password'
          required={true}
          onChange={changeHandler} />

        <Button
          customClass={classes.button}
          type='submit'
          onClick={signInHandler}
        >{'Sign In'}
        </Button>
      </Form>

      <span>
        {'Haven\'t yet registered? '}
        <Link className={classes.signin__form__link} to={configs.paths.signup}>{'Sign Up'}</Link>
      </span>
    </main>
  )
}