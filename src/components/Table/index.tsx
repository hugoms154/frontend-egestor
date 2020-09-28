import React, { TableHTMLAttributes, useEffect, useState } from 'react';
import formatCurrency from '../../utils/formatCurrency';
import formatDate from '../../utils/formatDate';

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
  inputEmployees: Employee[];
  titles: string[];
}

const Table: React.FC<TableProps> = ({ inputEmployees, titles }) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  useEffect(() => {
    function loadEmployee(): void {
      const formatedEmployees: Employee[] = inputEmployees.map(
        (employee: Employee): Employee => ({
          ...employee,
          formattedSalary: formatCurrency(employee.salary),
          formattedDate: formatDate(new Date(employee.created_at)),
        }),
      );

      setEmployees(formatedEmployees);
    }
    loadEmployee();
  }, [inputEmployees]);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            {titles.map(title => (
              <th key={title}>{title}</th>
            ))}
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
