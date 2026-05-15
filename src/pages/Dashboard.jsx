import Sidebar from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { businessAPI } from '../services/api';

export default function Dashboard() {
  const [business, setBusiness] = useState(null);

  useEffect(() => {
  const id = localStorage.getItem('businessId') || 1;
  const token = localStorage.getItem('token');

  fetch(`${process.env.REACT_APP_API_URL}/business/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(data => setBusiness(data))
    .catch(err => console.error(err));
}, []);

  const stats = [
    { label: 'Total Chats Today', value: '24', change: '↑ 12%', color: '#6c63ff' },
    { label: 'AI Resolved', value: '91%', change: '↑ 3%', color: '#22c55e' },
    { label: 'Avg Response', value: '1.2s', change: '⚡ Fast', color: '#f59e0b' },
    { label: 'AI Cost Today', value: '₹0', change: 'Free tier', color: '#06b6d4' },
  ];

  return (
    <div style={{ marginLeft: '240px', padding: '32px', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 700 }}>
          Welcome back 👋
        </h1>
        <p style={{ color: '#94a3b8', marginTop: '4px' }}>
          {business?.name || 'Loading...'}
        </p>
      </div>

      {/* Stats */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '16px',
        marginBottom: '32px'
      }}>
        {stats.map(stat => (
          <div key={stat.label} style={{
            background: '#fff',
            border: '1px solid #e2e8f0',
            borderRadius: '12px',
            padding: '20px'
          }}>
            <div style={{
              fontSize: '28px',
              fontWeight: 800,
              color: stat.color
            }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '13px', color: '#64748b', marginTop: '4px' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '12px', color: '#22c55e', marginTop: '8px' }}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Business Info */}
      {business && (
        <div style={{
          background: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '24px'
        }}>
          <h2 style={{ fontSize: '16px', fontWeight: 700, marginBottom: '16px' }}>
            Business Info
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px'
          }}>
            {[
              { label: '🏪 Name', value: business.name },
              { label: '📍 Location', value: business.location },
              { label: '🕐 Timings', value: business.timings },
              { label: '📞 Contact', value: business.contactNumber },
            ].map(item => (
              <div key={item.label} style={{
                padding: '12px',
                background: '#f8fafc',
                borderRadius: '8px'
              }}>
                <div style={{ fontSize: '12px', color: '#94a3b8' }}>{item.label}</div>
                <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px' }}>
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}