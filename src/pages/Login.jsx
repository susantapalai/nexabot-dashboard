import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded for now — Day 6 we add JWT
    if (email && password) {
      localStorage.setItem('businessId', '1');
      localStorage.setItem('logged', 'true');
      navigate('/dashboard');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f1a',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        background: '#1c1c28',
        border: '1px solid #2a2a3d',
        borderRadius: '16px',
        padding: '40px',
        width: '400px'
      }}>
        {/* Logo */}
        <div style={{
          color: '#fff',
          fontWeight: 800,
          fontSize: '24px',
          marginBottom: '8px',
          textAlign: 'center'
        }}>🤖 NexaBot</div>
        <p style={{
          color: '#94a3b8',
          textAlign: 'center',
          marginBottom: '32px',
          fontSize: '14px'
        }}>
          Business Owner Login
        </p>

        {/* Email */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{
            color: '#94a3b8',
            fontSize: '12px',
            display: 'block',
            marginBottom: '6px'
          }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="owner@business.com"
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '1px solid #2a2a3d',
              background: '#13131a',
              color: '#fff',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>

        {/* Password */}
        <div style={{ marginBottom: '24px' }}>
          <label style={{
            color: '#94a3b8',
            fontSize: '12px',
            display: 'block',
            marginBottom: '6px'
          }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="••••••••"
            onKeyDown={e => e.key === 'Enter' && handleLogin()}
            style={{
              width: '100%',
              padding: '12px',
              borderRadius: '10px',
              border: '1px solid #2a2a3d',
              background: '#13131a',
              color: '#fff',
              fontSize: '14px',
              outline: 'none'
            }}
          />
        </div>

        {/* Button */}
        <button
          onClick={handleLogin}
          style={{
            width: '100%',
            padding: '14px',
            borderRadius: '10px',
            border: 'none',
            background: '#6c63ff',
            color: '#fff',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Login →
        </button>
      </div>
    </div>
  );
}