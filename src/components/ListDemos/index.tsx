import React from 'react';
import styled from 'styled-components';

import Card from '../stable/Card';
import CardDescription from '../stable/CardDescription';
import CardImage from '../stable/CardImage';
import CardTitle from '../stable/CardTitle';
import Demo from '../../demos/demos.interface';

interface DemoItemProps {
  demo: Demo;
}

const DemoListItem: React.FC<DemoItemProps> = ({ demo }) => {
  return (
    <Card>
      <CardImage src={demo.image} />
      <CardTitle>{demo.title}</CardTitle>
      <CardDescription>{demo.description}</CardDescription>
    </Card>
  );
};

interface DemoListProps {
  demos: Demo[];
}

const Container = styled.main`
  display: flex;
  gap: 6rem;
  flex-wrap: wrap;
  width: 75rem;

  & > * {
    width: 21rem;
  }
`;

const DemoList: React.FC<DemoListProps> = ({ demos }) => {
  return (
    <Container>
      {demos.map((demo) => (
        <DemoListItem demo={demo} />
      ))}
    </Container>
  );
};

export default DemoList;
