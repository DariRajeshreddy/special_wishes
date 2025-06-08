import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
// import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Message from './components/Messege';

const ShareWrapper = styled.div`
  padding: 40px 20px;
  background: #fff0f5;
  text-align: center;
`;

const ShareInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 400px;
  margin: 10px auto;
  border: 1px solid #ff6b6b;
  border-radius: 5px;
`;

const ShareLink = styled.a`
  color: #ff6b6b;
  text-decoration: underline;
`;

const App: React.FC = () => {
  const [name, setName] = useState<string>('');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const nameParam = urlParams.get('name');
    if (nameParam) setName(decodeURIComponent(nameParam));
  }, []);

  const generateShareLink = () => {
    const baseUrl = window.location.origin;
    return `${baseUrl}?name=${encodeURIComponent(name)}`;
  };

  return (
    <div>
      <Header name={name} />
      <Message name={name} />
      {/* <Gallery /> */}
      {/* <ShareWrapper>
        <h2 style={{ fontSize: '1.5rem', color: '#ff6b6b', marginBottom: '1rem' }}>
          Share This Wish
        </h2>
        <ShareInput
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter her name"
        />
        <p>Share this link with her:</p>
        <ShareLink href={generateShareLink()} target="_blank" rel="noopener noreferrer">
          {generateShareLink()}
        </ShareLink>
      </ShareWrapper> */}
      <Footer />
    </div>
  );
};

export default App;