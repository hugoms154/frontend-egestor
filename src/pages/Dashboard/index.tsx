import React, { useEffect, useState } from 'react';
import { FiUsers, FiUserCheck, FiUserX } from 'react-icons/fi';
import { AiOutlineLoading } from 'react-icons/ai';

import Header from '../../components/Header';
import Table from '../../components/Table';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

import { Container, CardContainer, Card } from './styles';

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (() => {
      api
        .get<Employee[]>('employees')
        .then(response => {
          const { data } = response;
          setLoading(false);

          const formatedEmployees: Employee[] = data.map(
            (employee: Employee): Employee => ({
              ...employee,
              formattedSalary: formatCurrency(employee.salary),
              formattedDate: formatDate(new Date(employee.created_at)),
            }),
          );

          setEmployees(formatedEmployees.reverse());
        })
        .catch(() => {
          setLoading(false);
        });
    })();
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

            <strong>
              {loading ? (
                <AiOutlineLoading size={20} className="loading" />
              ) : (
                employees.length
              )}
            </strong>
          </Card>

          <Card>
            <header>
              <p>Funcionários ativos</p>
              <FiUserCheck size={32} color="#12A454" />
            </header>
            <strong>
              {loading ? (
                <AiOutlineLoading size={20} className="loading" />
              ) : (
                employees.filter(employee => employee.status === 'ATIVO').length
              )}
            </strong>
          </Card>

          <Card>
            <header>
              <p>Funcionários bloqueados</p>
              <FiUserX size={32} color="#E83F5B" />
            </header>
            <strong>
              {loading ? (
                <AiOutlineLoading size={20} className="loading" />
              ) : (
                employees.filter(
                  employee =>
                    employee.status === 'INATIVO' ||
                    employee.status === 'BLOQUEADO',
                ).length
              )}
            </strong>
          </Card>
        </CardContainer>

        {loading ? (
          <h1>
            <AiOutlineLoading size={20} className="loading" />
          </h1>
        ) : employees.length !== 0 ? (
          <Table
            inputEmployees={employees}
            titles={['Nome', 'Cargo', 'CPF', 'UF', 'Salário', 'Status', 'Data']}
          />
        ) : (
          <h1>Nenhum funcionário cadastrado.</h1>
        )}
      </Container>
    </>
  );
};

export default Dashboard;
