import React, { useState } from 'react';
import styles from '@/styles/pages/Auth.module.scss';
import Link from 'next/link';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Signing up...');
  };

  return (
    <div className={styles.authContainer}>
      <h2>Sign Up</h2>
      <form>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
      <div className='register'>
          Already have an account? <Link href="/signin" style={{ color: 'yellow' }}>Login</Link> here.
      </div>
    </div>
  );
};

export default SignUp;

