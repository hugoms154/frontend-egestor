import React, { useEffect, useState } from 'react';
import { FiUsers, FiUserCheck, FiUserX } from 'react-icons/fi';

import Header from '../../components/Header';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { Container, CardContainer, Card, TableContainer } from './styles';

interface Employee {
  id: string;
  name: string;
  position: string;
  CPF: string;
  UF: string;
  salary: number;
  status: string;
  created_at: string;
  formattedSalary: string;
  formattedDate: string;
}

const Dashboard: React.FC = () => {
  const [employees, setEmployees] = useState([] as Employee[]);

  useEffect(() => {
    async function loadEmployee(): Promise<void> {
      const { data } = await api.get<Employee[]>('employees');

      const formatedEmployees: Employee[] = data.map(
        (employee: Employee): Employee => ({
          ...employee,
          formattedSalary: formatCurrency(employee.salary),
          formattedDate: formatDate(new Date(employee.created_at)),
        }),
      );

      setEmployees(formatedEmployees);
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
        {employees.length !== 0 ? (
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
                      <strong>{employee.formattedSalary}</strong>
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
                    <td>{employee.formattedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TableContainer>
        ) : (
          <h1>Nenhum funcionário cadastrado.</h1>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
