import React, { useState } from 'react';
import styles from '@/styles/pages/Auth.module.scss';
import IndODishLogo from '@/components/IndODishLogo';
import Link from 'next/link';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Handle sign-in logic here
    console.log('Signing in...');
  };

  return (
    <div className={styles.authContainer}>
      <div>
      <IndODishLogo />
      <h1>IndODish</h1>
      </div>
      
      <h2>Sign In</h2>
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
        <button className="signin_default" type="button" onClick={handleSignIn}>
          Sign in
        </button>
        <button className="signin_gojek" type="button" onClick={handleSignIn}>
          Sign in with Gojek
        </button>
      </form>
      <div className='register'>
          Don't have an account? <Link href="/signup" style={{ color: 'yellow' }}>Register</Link> now.
      </div>
    </div>
  );
};

export default SignIn;
