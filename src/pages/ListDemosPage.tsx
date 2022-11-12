import React from 'react';
import styled from 'styled-components';

import DemoList from '../components/ListDemos';
import demos from '../demos';

const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 6.25rem;
`;

const ListDemosPage: React.FC = () => {
  return (
    <Container>
      <DemoList demos={demos} />;
    </Container>
  );
};

export default ListDemosPage;
