import React, { useState } from 'react';
import './Chat.css';
import { Stack, Typography, Tooltip, Link } from '@mui/material';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useTheme } from '@mui/material/styles';
import ReactMarkdown from 'react-markdown';

// Reusing the GenerateWithGemini component from the provided code
const GenerateWithGemini = ({ prompt }) => {
  const theme = useTheme();

  return (
    <Stack direction={'row'} spacing={1} alignItems={'center'}>
      <AutoAwesomeIcon style={{ fontSize: '1rem' }} />
      <Typography variant="caption">
        Generated with{' '}
        <Link
          style={{ color: '#D4A35A' }} // Set to gold color
          href="https://gemini.google.com"
          target="_blank"
        >
          Gemini
        </Link>
      </Typography>
      <Tooltip
        sx={{ cursor: 'pointer' }}
        title={<ReactMarkdown children={prompt} />}
        placement="top"
        arrow
      >
        <InfoRoundedIcon style={{ fontSize: '1rem', color: '#E7DCC8' }} /> {/* Icon color changed to cream */}
      </Tooltip>
    </Stack>
  );
};

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: 'bot', text: 'Hello! How can I assist you today?', prompt: 'This message is generated to assist you with general inquiries.' },
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() === '') return;

    // Add user message
    setMessages([...messages, { sender: 'user', text: input }]);
    setInput('');

    // Simulate bot response (You can integrate actual chat logic here)
    setTimeout(() => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          sender: 'bot',
          text: 'This is a sample response.',
          prompt: 'This recommendation aligns with your query and provides a sample response to illustrate functionality.',
        },
      ]);
    }, 1000);
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
            <div className="message-content">{msg.text}</div>

            {/* Only show "Generated with Gemini" for bot messages */}
            {msg.sender === 'bot' && msg.prompt && (
              <div className="gemini-container">
                <GenerateWithGemini prompt={msg.prompt} />
              </div>
            )}
          </div>
        ))}
      </div>

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
        <button onClick={handleSend} className="send-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
