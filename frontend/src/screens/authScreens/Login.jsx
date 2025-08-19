"use client";
import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { baseUrl } from '../../config/Axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await axios.post(`${baseUrl}/user/login`, {
        email,
        password
      });
      return res.data;
    }
  });

  const handleLogin = (e) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={e => setEmail(e.target.value)}
          autoComplete="username"
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={e => setPassword(e.target.value)} 
          autoComplete="current-password"
        />
        <button type="submit">Login</button>

        {loginMutation.isLoading && <p>Loading...</p>}
        {loginMutation.isError && <p>Error: {loginMutation.error.message}</p>}
        {loginMutation.data && <p>Success! Welcome {loginMutation.data.username}</p>}
      </form>
    </div>
  );
};

export default Login;
