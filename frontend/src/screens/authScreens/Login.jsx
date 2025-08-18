import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post('http://localhost:3000/user/login', {
        email,
        password
      });
      return res.data;
    }
  });

  const handleLogin = () => {
    loginMutation.mutate();
  };

  return (
    <div>
      <h1>Login</h1>
      <input 
        type="email" 
        placeholder="Email" 
        value={email} 
        onChange={e => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Password" 
        value={password} 
        onChange={e => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Login</button>

      {loginMutation.isLoading && <p>Loading...</p>}
      {loginMutation.isError && <p>Error: {loginMutation.error.message}</p>}
      {loginMutation.data && <p>success:{loginMutation.data.username}</p>}
    </div>
  );
};

export default Login;
