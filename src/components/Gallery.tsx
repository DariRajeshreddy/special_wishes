import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const GalleryWrapper = styled.div`
  padding: 40px 20px;
  background: #ffe6e6;
  text-align: center;
`;

const GalleryTitle = styled.h2`
  font-size: 2rem;
  color: #ff6b6b;
  margin-bottom: 1.5rem;
`;

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const GalleryImage = styled(motion.img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;

const Gallery: React.FC = () => {
    const photos = [
        'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', // Romantic flowers
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60', // Sunset beach (romantic vibe)
    ];

    return (
        <GalleryWrapper>
            <GalleryTitle>Our Memories</GalleryTitle>
            <GalleryGrid>
                {photos.map((photo, index) => (
                    <GalleryImage
                        key={index}
                        src={photo}
                        alt={`Memory ${index + 1}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                    />
                ))}
            </GalleryGrid>
        </GalleryWrapper>
    );
};

export default Gallery;