import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

export default function ChatHistory() {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const businessId = localStorage.getItem('businessId') || 1;

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch(
      `${process.env.REACT_APP_API_URL}/chat/history/${businessId}`,
      { headers: { 'Authorization': `Bearer ${token}` } }
    )
      .then(res => res.json())
      .then(data => {
        setChats(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [businessId]);

  const filtered = chats.filter(chat =>
    chat.userMessage?.toLowerCase()
      .includes(search.toLowerCase()) ||
    chat.customerPhone?.includes(search)
  );

  const formatTime = (dateStr) => {
    if (!dateStr) return '';
    return new Date(dateStr).toLocaleString('en-IN', {
      day: '2-digit', month: 'short',
      hour: '2-digit', minute: '2-digit'
    });
  };

  const maskPhone = (phone) => {
    if (!phone) return 'Unknown';
    return phone.replace('whatsapp:+91', '+91 ')
      .replace(/(\d{5})(\d{5})/, '$1 XXXXX');
  };

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{
        marginLeft: '240px',
        padding: '32px',
        flex: 1,
        minHeight: '100vh',
        background: '#f8fafc'
      }}>

        {/* Header */}
        <div style={{ marginBottom: '24px' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 700 }}>
            Chat History 💬
          </h1>
          <p style={{ color: '#94a3b8', marginTop: '4px', fontSize: '14px' }}>
            {chats.length} total conversations
          </p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Search by message or phone..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{
              width: '100%',
              maxWidth: '400px',
              padding: '10px 14px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0',
              fontSize: '14px',
              outline: 'none',
              background: '#fff'
            }}
          />
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3 1fr)',
          gap: '16px',
          marginBottom: '24px'
        }}>
          {[
            { label: 'Total Chats', value: chats.length, color: '#6c63ff' },
            { label: 'Today', value: chats.filter(c =>
              new Date(c.createdAt).toDateString() ===
              new Date().toDateString()).length, color: '#22c55e' },
            { label: 'Unique Customers', value:
              new Set(chats.map(c => c.customerPhone)).size,
              color: '#f59e0b' }
          ].map(stat => (
            <div key={stat.label} style={{
              background: '#fff',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '16px 20px'
            }}>
              <div style={{
                fontSize: '24px',
                fontWeight: 800,
                color: stat.color
              }}>
                {stat.value}
              </div>
              <div style={{ fontSize: '12px', color: '#64748b' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Chat List */}
        {loading ? (
          <div style={{ color: '#94a3b8', textAlign: 'center', padding: '40px' }}>
            Loading chats...
          </div>
        ) : filtered.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px',
            color: '#94a3b8',
            background: '#fff',
            borderRadius: '12px',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ fontSize: '40px', marginBottom: '12px' }}>💬</div>
            <div style={{ fontSize: '16px', fontWeight: 600 }}>
              No chats yet
            </div>
            <div style={{ fontSize: '14px', marginTop: '4px' }}>
              Conversations will appear here when customers message
            </div>
          </div>
        ) : (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {filtered.map((chat, index) => (
              <div key={index} style={{
                background: '#fff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                padding: '16px 20px',
                transition: 'border-color 0.2s'
              }}
                onMouseOver={e =>
                  e.currentTarget.style.borderColor = '#6c63ff'}
                onMouseOut={e =>
                  e.currentTarget.style.borderColor = '#e2e8f0'}
              >
                {/* Top row */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <div style={{
                      width: '32px', height: '32px',
                      borderRadius: '50%',
                      background: 'rgba(108,99,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px'
                    }}>👤</div>
                    <span style={{
                      fontSize: '13px',
                      fontWeight: 600,
                      color: '#6c63ff'
                    }}>
                      {maskPhone(chat.customerPhone)}
                    </span>
                  </div>
                  <span style={{
                    fontSize: '11px',
                    color: '#94a3b8'
                  }}>
                    {formatTime(chat.createdAt)}
                  </span>
                </div>

                {/* Customer message */}
                <div style={{
                  background: '#f8fafc',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  marginBottom: '8px'
                }}>
                  <div style={{
                    fontSize: '10px',
                    color: '#94a3b8',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Customer
                  </div>
                  <div style={{ fontSize: '14px', color: '#1e293b' }}>
                    {chat.userMessage}
                  </div>
                </div>

                {/* AI Reply */}
                <div style={{
                  background: 'rgba(108,99,255,0.06)',
                  borderRadius: '8px',
                  padding: '10px 12px',
                  borderLeft: '3px solid #6c63ff'
                }}>
                  <div style={{
                    fontSize: '10px',
                    color: '#6c63ff',
                    marginBottom: '4px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    🤖 NexaBot AI
                  </div>
                  <div style={{
                    fontSize: '14px',
                    color: '#1e293b',
                    lineHeight: '1.5'
                  }}>
                    {chat.botReply}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}