import React from 'react';

interface PathProps {
  children: React.ReactNode;
}

export const Path: React.FC<PathProps> = ({ children }) => {
  return <path>{children}</path>;
};

export default Path;
