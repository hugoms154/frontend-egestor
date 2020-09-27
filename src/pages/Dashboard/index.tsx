import React from 'react';
import { FiUsers, FiUserCheck, FiUserX } from 'react-icons/fi';

import Header from '../../components/Header';

import { Container, CardContainer, Card, TableContainer } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Header size="large" />
      <Container>
        <CardContainer>
          <Card>
            <header>
              <p>Total de funcionários</p>
              <FiUsers size={32} color="#1B5299" />
            </header>
            <strong>500</strong>
          </Card>

          <Card>
            <header>
              <p>Funcionários ativos</p>
              <FiUserCheck size={32} color="#12A454" />
            </header>
            <strong>472</strong>
          </Card>

          <Card>
            <header>
              <p>Funcionários bloqueados</p>
              <FiUserX size={32} color="#E83F5B" />
            </header>
            <strong>54</strong>
          </Card>
        </CardContainer>

        <TableContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cargo</th>
                <th>CPF</th>
                <th>UF</th>
                <th>Salário</th>
                <th>Status</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lucas Rocha</td>
                <td>Dev Jr.</td>
                <td>123.456.789-00</td>
                <td>RJ</td>
                <td>
                  <strong>R$ 10.245,94</strong>
                </td>
                <td>
                  <span>
                    <span className="blocked" />
                    BLOQUEADO
                  </span>
                </td>
                <td>27/09/2020</td>
              </tr>

              <tr>
                <td>Lucas Rocha</td>
                <td>Dev Jr.</td>
                <td>123.456.789-00</td>
                <td>RJ</td>
                <td>
                  <strong>R$ 10.245,94</strong>
                </td>
                <td>
                  <span>
                    <span className="active" />
                    ATIVO
                  </span>
                </td>
                <td>27/09/2020</td>
              </tr>

              <tr>
                <td>Lucas Rocha</td>
                <td>Dev Jr.</td>
                <td>123.456.789-00</td>
                <td>RJ</td>
                <td>
                  <strong>R$ 10.245,94</strong>
                </td>
                <td>
                  <span>
                    <span className="blocked" />
                    BLOQUEADO
                  </span>
                </td>
                <td>27/09/2020</td>
              </tr>

              <tr>
                <td>Lucas Rocha</td>
                <td>Dev Jr.</td>
                <td>123.456.789-00</td>
                <td>RJ</td>
                <td>
                  <strong>R$ 10.245,94</strong>
                </td>
                <td>
                  <span>
                    <span className="active" />
                    ATIVO
                  </span>
                </td>
                <td>27/09/2020</td>
              </tr>
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
