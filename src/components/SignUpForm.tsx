import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [, setErrorMessage] = useState<string>('');

  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Signed up:', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign up error:', errorMessage);
        setErrorMessage(errorMessage);
        if (errorCode === 'auth/email-already-in-use') {
          alert('Email already in use.'); 
        }
      });
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
