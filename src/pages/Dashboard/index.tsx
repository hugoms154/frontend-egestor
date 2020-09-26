import React from 'react';
import Header from '../../components/Header';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header size="large" />
      <Container>
        <h1>Welcome to Allu Project</h1>
      </Container>
    </>
  );
};

export default Dashboard;
