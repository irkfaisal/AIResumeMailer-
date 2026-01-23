import { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';
import { gmailAPI } from '../../services/auth.js';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { user, logout } = useAuth();
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        setLoading(true);
        try {
            const response = await gmailAPI.listMessages();
            setMessages(response.data.messages || []);
        } catch (error) {
            console.error('Error fetching messages:', error);
            if (error.response?.status === 401) {
                // Session expired, logout
                logout();
                navigate('/login');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    };

    return (
        <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
            {/* Header */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '30px',
                padding: '20px',
                backgroundColor: 'white',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    {user?.picture && (
                        <img
                            src={user.picture}
                            alt={user.name}
                            style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%'
                            }}
                        />
                    )}
                    <div>
                        <h2 style={{ margin: 0 }}>Welcome, {user?.name}!</h2>
                        <p style={{ margin: '5px 0 0 0', color: '#666' }}>{user?.email}</p>
                    </div>
                </div>

                <button
                    onClick={handleLogout}
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#f44336',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontSize: '14px'
                    }}
                >
                    Logout
                </button>
            </div>

            {/* Gmail Messages Section */}
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px'
                }}>
                    <h3 style={{ margin: 0 }}>Your Gmail Messages</h3>
                    <button
                        onClick={fetchMessages}
                        disabled={loading}
                        style={{
                            padding: '8px 16px',
                            backgroundColor: loading ? '#ccc' : '#4285f4',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: loading ? 'not-allowed' : 'pointer'
                        }}
                    >
                        {loading ? 'Loading...' : 'Refresh'}
                    </button>
                </div>

                {messages.length === 0 ? (
                    <p style={{ color: '#666', textAlign: 'center', padding: '20px' }}>
                        No messages found
                    </p>
                ) : (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {messages.map((message) => (
                            <li
                                key={message.id}
                                style={{
                                    padding: '15px',
                                    borderBottom: '1px solid #eee',
                                    cursor: 'pointer'
                                }}
                            >
                                Message ID: {message.id}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Dashboard;