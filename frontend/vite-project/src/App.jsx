import { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/message');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching message:', error);
      setMessage('Error fetching data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1 className="title">Welcome to My App</h1>
      <button onClick={handleClick} className="button" disabled={loading}>
        {loading ? 'Loading...' : 'Get Message'}
      </button>
      {message && <div className="message-box">{message}</div>}
    </div>
  );
}

export default App;
