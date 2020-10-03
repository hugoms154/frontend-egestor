import React, { useCallback, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import Header from '../../components/Header';
import api from '../../services/api';
import formatDate from '../../utils/formatDate';

import { Container, Error, Confirm, ConfirmBox } from './styles';

interface Employee {
  name: string;
  position: string;
  CPF: string;
  status: string;
  created_at: string;
  formattedDate: string;
}

interface IError {
  show: boolean;
  messages: string[];
}

const Delete: React.FC = () => {
  const [iCPF, setICPF] = useState('');
  const [employee, setEmployee] = useState({} as Employee);
  const [iErrors, setIErrors] = useState({} as IError);
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = useCallback(async () => {
    await api.delete(`employees/${iCPF}`);

    setICPF('');

    setConfirm(!confirm);
  }, [iCPF, confirm]);

  const handleConfirm = useCallback(async () => {
    setIErrors({ show: false, messages: [] });
    if (iCPF.length !== 11 || iCPF === '') {
      setIErrors({ show: true, messages: ['Deve conter 11 dígitos'] });
      return;
    }
    try {
      const { data: dataArray } = await api.get<Employee[]>(`/employees/cpf`, {
        params: { value: iCPF },
      });
      const data = dataArray[0];

      setEmployee({
        ...data,
        formattedDate: formatDate(new Date(data.created_at)),
      });

      setConfirm(!confirm);
    } catch (err) {
      setIErrors({
        show: true,
        messages: ['Funcionário não localizado no sistema.'],
      });
    }
  }, [iCPF, confirm]);

  return (
    <>
      <Header size="small" />

      <Confirm show={!!confirm}>
        <ConfirmBox>
          <h1>
            <FiAlertCircle />
            <span>Atenção!</span>
          </h1>
          <p>Realmente deseja remover o funcionário?</p>
          <p>{`CPF: ${employee.CPF}`}</p>
          <p>{`Nome: ${employee.name}`}</p>
          <p>{`Cargo: ${employee.position}`}</p>
          <p>
            Status:
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
          </p>
          <p>{`Data de cadastro: ${employee.formattedDate}`}</p>

          <span>
            <button onClick={handleSubmit} type="button">
              Confirmar
            </button>
            <button onClick={() => setConfirm(!confirm)} type="button">
              Cancelar
            </button>
          </span>
        </ConfirmBox>
      </Confirm>

      <Container>
        <h1>Remover funcionário</h1>

        <form>
          <fieldset>
            <Error show={iErrors.show}>
              <FiAlertCircle />
              {iErrors.messages &&
                iErrors.messages.map(message => (
                  <strong key={message}>{message}</strong>
                ))}
            </Error>
            <input
              value={iCPF}
              onChange={e => setICPF(e.target.value)}
              placeholder="Digite o CPF"
            />
            <button onClick={handleConfirm} type="button">
              Deletar
            </button>
          </fieldset>
        </form>
      </Container>
    </>
  );
};

export default Delete;
