import { parseISO } from 'date-fns';
import React, { TableHTMLAttributes, useEffect, useState } from 'react';
import { FiEdit } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import formatCurrency from '../../utils/formatCurrency';

import { Container } from './styles';

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
          formattedDate: parseISO(
            employee.created_at.substring(0, 10),
          ).toLocaleDateString('pt-BR'),
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
              <td>
                <Link to={{ pathname: '/edit', state: { employee } }}>
                  {employee.name}
                </Link>
              </td>
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
              <td>
                <Link
                  to={{ pathname: '/edit', state: { employee } }}
                  className="edit"
                >
                  <FiEdit size={20} />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default Table;
