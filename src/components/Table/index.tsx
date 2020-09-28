import React, { TableHTMLAttributes } from 'react';

import { Container } from './styles';
// SelectHTMLAttributes<HTMLSelectElement
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
interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  employees: Employee[];
  titles: string[];
}

const Table: React.FC<TableProps> = ({ employees, titles }) => {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            {titles.map(title => (
              <th key={title}>{title}</th>
            ))}
            {/* <th>Nome</th>
            <th>Cargo</th>
            <th>CPF</th>
            <th>UF</th>
            <th>Salário</th>
            <th>Status</th>
            <th>Data</th> */}
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
    </Container>
  );
};

export default Table;
