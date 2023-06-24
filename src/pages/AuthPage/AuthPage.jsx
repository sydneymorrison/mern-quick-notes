import { useState } from 'react';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <main>
      <div className="signUpContainer">
        <h1>⭐️ Note Diary ⭐️</h1>
        <button className="signUpButton" onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button>
        { showSignUp ?
            <SignUpForm setUser={setUser} />
            :
            <LoginForm setUser={setUser} />
        }
      </div>
    </main>
  );
}