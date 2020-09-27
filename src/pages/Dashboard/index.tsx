import React, { useEffect, useState } from 'react';
import { FiUsers, FiUserCheck, FiUserX } from 'react-icons/fi';

import Header from '../../components/Header';
import api from '../../services/api';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Employee {
  id: string;
  name: string;
  position: string;
  CPF: string;
  UF: string;
  salary: string;
  status: string;
  created_at: string;
}

const Dashboard: React.FC = () => {
  const [employees, setEmployees] = useState([] as Employee[]);

  useEffect(() => {
    async function loadEmployee(): Promise<void> {
      const { data } = await api.get<Employee[]>('employees');
      setEmployees(data);
    }
    loadEmployee();
  }, []);

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
            <strong>{employees.length}</strong>
          </Card>

          <Card>
            <header>
              <p>Funcionários ativos</p>
              <FiUserCheck size={32} color="#12A454" />
            </header>
            <strong>
              {employees.filter(employee => employee.status === 'ATIVO').length}
            </strong>
          </Card>

          <Card>
            <header>
              <p>Funcionários bloqueados</p>
              <FiUserX size={32} color="#E83F5B" />
            </header>
            <strong>
              {
                employees.filter(
                  employee => employee.status === ('INATIVO' || 'BLOQUEADO'),
                ).length
              }
            </strong>
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
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.name}</td>
                  <td>{employee.position}</td>
                  <td>{employee.CPF}</td>
                  <td>{employee.UF}</td>
                  <td>
                    <strong>
                      R$
                      {employee.salary}
                    </strong>
                  </td>
                  <td>
                    <span>
                      <span
                        className={
                          employee.status === 'BLOQUEADO'
                            ? 'blocked'
                            : employee.status === 'ATIVO'
                            ? 'active'
                            : 'inactive'
                        }
                      />
                      {employee.status}
                    </span>
                  </td>
                  <td>{employee.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Dashboard;
