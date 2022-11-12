import React from 'react';
import Demo from '../demos.interface';
import image from './demo1-image.png';

const Demo1: React.FC = () => {
  return <div />;
};

export const Demo1MetaData: Demo = {
  component: <Demo1 />,
  description: 'this is a description',
  image,
  slug: 'demo-1',
  title: 'Demo One',
};

export default Demo1;
