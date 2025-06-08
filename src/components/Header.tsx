import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  text-align: center;
  padding: 29px 20px;
  background: linear-gradient(135deg, #ffe6f0, #ffccd5);
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #d6336c;
`;

const Title = styled(motion.h1)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  font-family: 'Cursive', sans-serif;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
  color: #6d2a4d;
  line-height: 1.6;
`;

const SmallIcon = styled(motion.div)`
  margin-top: 30px;
  font-size: 3rem;
`;

interface HeaderProps {
    name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => (
    <Wrapper>
        <Title
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
        >
            Happy Birthday, {name || 'Ammu'}! 💖
        </Title>

        <Subtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
        >
            On this special day, I just want to remind you how incredibly loved you are.
            Your smile brightens my world, and your heart makes every day worth celebrating.
            May your birthday be as beautiful and amazing as you are. 💫
        </Subtitle>

        <SmallIcon
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
        >
            🎂🎈
        </SmallIcon>
    </Wrapper>
);

export default Header;
