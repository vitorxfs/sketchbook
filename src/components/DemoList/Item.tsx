import React from 'react';

import Card from '../stable/Card';
import CardDescription from '../stable/CardDescription';
import CardImage from '../stable/CardImage';
import CardTitle from '../stable/CardTitle';
import Demo from '../../demos/demos.interface';

interface DemoItemProps {
  demo: Demo;
}

export const DemoListItem: React.FC<DemoItemProps> = ({ demo }) => {
  return (
    <Card>
      <CardImage src={demo.image} />
      <CardTitle>{demo.title}</CardTitle>
      <CardDescription>{demo.description}</CardDescription>
    </Card>
  );
};

export default DemoListItem;
