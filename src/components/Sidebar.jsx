import { useNavigate, useLocation } from 'react-router-dom';

const menuItems = [
  { icon: '📊', label: 'Dashboard', path: '/dashboard' },
  { icon: '✏️', label: 'Edit Business', path: '/business/edit' },
  { icon: '💬', label: 'Chat History', path: '/chats' },
];

export default function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div style={{
      width: '240px',
      height: '100vh',
      background: '#0f0f1a',
      padding: '24px 16px',
      position: 'fixed',
      left: 0, top: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
      {/* Logo */}
      <div style={{
        color: '#fff',
        fontWeight: 800,
        fontSize: '20px',
        marginBottom: '32px',
        padding: '0 8px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
      }}>
        <span style={{
          width: '8px', height: '8px',
          background: '#6c63ff',
          borderRadius: '50%',
          display: 'inline-block'
        }}/>
        NexaBot
      </div>

      {/* Menu Items */}
      {menuItems.map(item => (
        <div
          key={item.path}
          onClick={() => navigate(item.path)}
          style={{
            padding: '10px 12px',
            borderRadius: '10px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: location.pathname === item.path ? '#fff' : '#94a3b8',
            background: location.pathname === item.path
              ? 'rgba(108,99,255,0.2)' : 'transparent',
            fontSize: '14px',
            fontWeight: 500,
            transition: 'all 0.2s'
          }}
        >
          <span>{item.icon}</span>
          {item.label}
        </div>
      ))}

      {/* Logout */}
      <div
        onClick={() => { localStorage.clear(); navigate('/login'); }}
        style={{
          marginTop: 'auto',
          padding: '10px 12px',
          borderRadius: '10px',
          cursor: 'pointer',
          color: '#ef4444',
          fontSize: '14px',
          fontWeight: 500
        }}
      >
        🚪 Logout
      </div>
    </div>
  );
}