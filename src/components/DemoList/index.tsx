import React from 'react';
import styled from 'styled-components';

import Card from '../stable/Card';
import CardDescription from '../stable/CardDescription';
import CardImage from '../stable/CardImage';
import CardTitle from '../stable/CardTitle';
import Demo from '../../demos/demos.interface';
import DemoListItem from './Item';
import Link from '../../infra/components/Link';

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

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const DemoList: React.FC<DemoListProps> = ({ demos }) => {
  return (
    <Container>
      {demos.map((demo) => (
        <StyledLink to={`/demo/${demo.slug}`} key={demo.slug}>
          <DemoListItem demo={demo} />
        </StyledLink>
      ))}
    </Container>
  );
};

export default DemoList;
