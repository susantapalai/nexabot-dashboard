import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { businessAPI } from '../services/api';

export default function BusinessEditor() {
  const navigate = useNavigate();
  const businessId = localStorage.getItem('businessId') || 1;

  const [form, setForm] = useState({
    name: '',
    location: '',
    timings: '',
    menu: '',
    faqs: '',
    deliveryInfo: '',
    contactNumber: '',
    whatsappNumber: ''
  });

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    businessAPI.getById(businessId)
      .then(data => {
        setForm({
          name: data.name || '',
          location: data.location || '',
          timings: data.timings || '',
          menu: data.menu || '',
          faqs: data.faqs || '',
          deliveryInfo: data.deliveryInfo || '',
          contactNumber: data.contactNumber || '',
          whatsappNumber: data.whatsappNumber || ''
        });
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [businessId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      await businessAPI.update(businessId, form);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (err) {
      alert('Failed to save. Try again.');
    }
    setSaving(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '10px 12px',
    borderRadius: '8px',
    border: '1px solid #e2e8f0',
    background: '#f8fafc',
    fontSize: '14px',
    outline: 'none',
    fontFamily: 'inherit',
    marginTop: '6px'
  };

  const labelStyle = {
    fontSize: '12px',
    fontWeight: 600,
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  };

  if (loading) return (
    <div style={{ marginLeft: '240px', padding: '32px' }}>
      Loading...
    </div>
  );

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{
        marginLeft: '240px',
        padding: '32px',
        flex: 1,
        maxWidth: '800px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <div>
            <h1 style={{ fontSize: '24px', fontWeight: 700 }}>
              Edit Business Info ✏️
            </h1>
            <p style={{ color: '#94a3b8', marginTop: '4px', fontSize: '14px' }}>
              Changes reflect immediately in AI responses
            </p>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              padding: '12px 24px',
              borderRadius: '10px',
              border: 'none',
              background: saved ? '#22c55e' : '#6c63ff',
              color: '#fff',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {saving ? 'Saving...' : saved ? '✅ Saved!' : 'Save Changes'}
          </button>
        </div>

        {/* Form */}
        <div style={{
          background: '#fff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px'
        }}>

          {/* Row 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Business Name</label>
              <input
                style={inputStyle}
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Pizza Palace"
              />
            </div>
            <div>
              <label style={labelStyle}>Contact Number</label>
              <input
                style={inputStyle}
                name="contactNumber"
                value={form.contactNumber}
                onChange={handleChange}
                placeholder="9876543210"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div>
              <label style={labelStyle}>Location</label>
              <input
                style={inputStyle}
                name="location"
                value={form.location}
                onChange={handleChange}
                placeholder="MG Road, Pune"
              />
            </div>
            <div>
              <label style={labelStyle}>Timings</label>
              <input
                style={inputStyle}
                name="timings"
                value={form.timings}
                onChange={handleChange}
                placeholder="11 AM to 11 PM"
              />
            </div>
          </div>

          {/* Menu */}
          <div>
            <label style={labelStyle}>Menu / Services</label>
            <textarea
              style={{ ...inputStyle, height: '120px', resize: 'vertical' }}
              name="menu"
              value={form.menu}
              onChange={handleChange}
              placeholder="Margherita Pizza: Rs 199&#10;Paneer Tikka: Rs 249&#10;Veg Supreme: Rs 229"
            />
            <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
              Each item on new line. AI uses this to answer menu questions.
            </p>
          </div>

          {/* FAQs */}
          <div>
            <label style={labelStyle}>FAQs</label>
            <textarea
              style={{ ...inputStyle, height: '100px', resize: 'vertical' }}
              name="faqs"
              value={form.faqs}
              onChange={handleChange}
              placeholder="Do you deliver? Yes within 5km.&#10;Minimum order? Rs 199."
            />
            <p style={{ fontSize: '11px', color: '#94a3b8', marginTop: '4px' }}>
              Common questions and answers. AI uses this automatically.
            </p>
          </div>

          {/* Delivery */}
          <div>
            <label style={labelStyle}>Delivery Info</label>
            <input
              style={inputStyle}
              name="deliveryInfo"
              value={form.deliveryInfo}
              onChange={handleChange}
              placeholder="Free above Rs 399. Average 30 mins."
            />
          </div>

          {/* WhatsApp */}
          <div>
            <label style={labelStyle}>WhatsApp Number</label>
            <input
              style={inputStyle}
              name="whatsappNumber"
              value={form.whatsappNumber}
              onChange={handleChange}
              placeholder="+919876543210"
            />
          </div>

        </div>

        {/* Info Box */}
        <div style={{
          marginTop: '16px',
          padding: '14px 16px',
          borderRadius: '10px',
          background: 'rgba(108,99,255,0.08)',
          border: '1px solid rgba(108,99,255,0.2)',
          fontSize: '13px',
          color: '#6c63ff'
        }}>
          💡 After saving — test on WhatsApp immediately to see updated AI responses.
        </div>
      </div>
    </div>
  );
}