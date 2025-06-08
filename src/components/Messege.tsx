import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import img from '../Assets/Images/WhatsApp Image 2025-06-08 at 4.33.18 PM.jpeg'

const MessageWrapper = styled.div`
  padding: 60px 20px;
  background: #fff;
  text-align: center;
`;

const MessageTitle = styled.h3`
  color: #ff6b6b;
  font-size: 1.8rem;
`;

const RevealImage = styled(motion.div)`
  margin-top: 30px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  }

  p {
    margin-top: 15px;
    font-size: 1.1rem;
    color: #333;
  }
`;

interface MessageProps {
    name: string;
}

const Message: React.FC<MessageProps> = ({ name }) => {
    const [showMessage, setShowMessage] = useState(false);

    return (
        <MessageWrapper>
            <MessageTitle>To My Dearest {name || "Ammu"}</MessageTitle>

            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    marginTop: '20px',
                    padding: '10px 20px',
                    background: '#ff6b6b',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                }}
                onClick={() => setShowMessage(true)}
            >
                A Special Message
            </motion.button>

            {showMessage && (
                <RevealImage
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img src={img} alt="Special surprise" />
                    <p>
                        Even though you’re not here with me, you are still the reason behind my smile.
                        Wishing you a heartfelt Happy Birthday. 💖
                    </p>
                </RevealImage>
            )}
        </MessageWrapper>
    );
};

export default Message;
