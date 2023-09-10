import { useAuth } from 'contexts/AuthContext';
import React, { ChangeEvent, useState } from 'react';

// Auth의 UI와 UI에 관련된 state는 남겨두기
function Auth() {
  const [userInputs, setUserInputs] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInputs;

  const saveUserInputs = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;

    setUserInputs((prev) => ({ ...prev, [name]: value }));
  };

  const { signin, signup, logout } = useAuth();

  const signinWithForm = () => {
    signin(email, password);
  };

  const signupWithForm = () => {
    signup(email, password);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label htmlFor="email">
          email <input value={email} name="email" onChange={saveUserInputs} />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          password{' '}
          <input value={password} name="password" onChange={saveUserInputs} />
        </label>
      </div>
      <button type="submit" onClick={signinWithForm}>
        signin
      </button>
      <button type="submit" onClick={signupWithForm}>
        signup
      </button>
      <button type="submit" onClick={logout}>
        logout
      </button>
    </form>
  );
}
export default Auth;
