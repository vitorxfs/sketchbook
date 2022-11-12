import React from 'react';

export interface Demo {
  title: string;
  description: string;
  image: string;
  slug: string;
  component: React.ReactNode;
}

export default Demo;
