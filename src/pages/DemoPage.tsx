import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import styled from 'styled-components';

import demos from '../demos';

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const DemoPage: React.FC = () => {
  const { slug } = useParams();

  const demo = demos.find((d) => d.slug === slug);

  useEffect(() => {
    console.log(slug);
  }, [slug]);

  return (
    <>
      <Container>{demo ? demo.component : '404 not found'}</Container>
    </>
  );
};

export default DemoPage;
