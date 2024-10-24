import React, { useState, useContext } from 'react';
import './Chat.css';
import { AuthContext } from '../context/AuthContext';
import axiosInstance from '../utils/axiosConfig'; // Use Axios instance
import ReactMarkdown from 'react-markdown'; // Ensure this import is present
import GenerateWithGemini from './GenerateWithGemini'; // Ensure correct path

const Chat = () => {
  const { authToken } = useContext(AuthContext); // Access authToken
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hello! How can I assist you today?', 
      prompt: 'This message is generated to assist you with general inquiries.' 
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Loading state for bot response
  const [error, setError] = useState(''); // Error state

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Add user message
    const userMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInput('');
    setError('');
    setIsLoading(true);

    try {
      // Send POST request to backend with the query
      const response = await axiosInstance.post(
        'http://35.233.177.207:5000/api/ask', // Relative path
        { query: input },
        {
          headers: {
            'Authorization': `Bearer ${authToken}`, // Include JWT token
          },
        }
      );

      if (response.data && response.data.answer) {
        const botMessage = { 
          sender: 'bot', 
          text: response.data.answer,
          prompt: 'This recommendation aligns with your query and provides a sample response to illustrate functionality.' 
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      } else {
        const botMessage = { 
          sender: 'bot', 
          text: "I'm sorry, but I couldn't process your request.",
          prompt: "The backend did not return a valid answer."
        };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }
    } catch (err) {
      console.error('Error communicating with backend:', err);
      setError('An error occurred while processing your request. Please try again.');
      const botMessage = { 
        sender: 'bot', 
        text: "I'm sorry, but there was an error processing your request.",
        prompt: "An error occurred while communicating with the backend."
      };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="chat-container">
      {/* Chat Header */}
      <header className="chat-header">
        <h2>Chat with Right2Rise - LegalAssistant</h2>
      </header>

      {/* Messages Area */}
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${msg.sender === 'bot' ? 'bot' : 'user'}`}
          >
            {/* Render bot messages with ReactMarkdown */}
            {msg.sender === 'bot' ? (
              <ReactMarkdown className="message-content">{msg.text}</ReactMarkdown>
            ) : (
              <div className="message-content">{msg.text}</div>
            )}

            {/* Only show "Generated with Gemini" for bot messages */}
            {msg.sender === 'bot' && msg.prompt && (
              <div className="gemini-container">
              <GenerateWithGemini prompt={msg.prompt} />
              </div>
            )}
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="message bot">
            <div className="message-content">Typing...</div>
          </div>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="error-message">{error}</p>}

      {/* Input Area */}
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          className="chat-input"
        />
        <button onClick={handleSend} className="send-button" disabled={isLoading}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
