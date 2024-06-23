import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

interface SignUpFormProps {
  onSuccess: (userId: string) => void; 
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      onSuccess(user.uid); 
    })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <form onSubmit={handleSignUp}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

export default SignUpForm;