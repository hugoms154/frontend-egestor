import React, { useCallback, useRef } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import { Redirect, useHistory } from 'react-router-dom';
import { formatISO, parse } from 'date-fns';
import Header from '../../components/Header';

import Input from '../../components/Input';

import { Container } from './styles';
import api from '../../services/api';
import getValidationErrors from '../../utils/getValidationErrors';

interface EmployeeData {
  name: string;
  position: string;
  CPF: string;
  UF: string;
  salary: number;
  status: string;
  created_at: string;
  formattedDate?: string;
  formattedSalary?: string;
}

interface IIEditData {
  location: {
    state: {
      employee?: EmployeeData;
    };
  };
}

const Edit: React.FC<IIEditData> = ({ location }) => {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { state } = location;
  const created_at = state?.employee
    ? parse(state.employee.created_at.substr(0, 10), 'yyyy-MM-dd', new Date())
    : undefined;

  const handleSubmit = useCallback(
    async (data: EmployeeData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          position: Yup.string().required('Cargo é obrigatório'),
          CPF: Yup.string()
            .length(11, 'Necessário ter 11 dígitos para CPF')
            .matches(/^[0-9]*$/, 'Apenas números aceitos.'),
          UF: Yup.string()
            .length(2, 'Necessário ter 2 dígitos para UF')
            .matches(
              /(RO|AC|AM|RR|PA|AP|TO|MA|PI|CE|RN|PB|PE|AL|SE|BA|MG|ES|RJ|SP|PR|SC|RS|MS|MT|GO|DF)/,
              'Apenas UFs válidas!',
            )
            .uppercase(),
          salary: Yup.string().required('Salário é obrigatório'),
          status: Yup.string()
            .required('Status é obrigatório')
            .matches(
              /(ATIVO|INATIVO|BLOQUEADO)/,
              'Apenas ATIVO, INATIVO ou BLOQUEADO',
            )
            .uppercase(),
          created_at: Yup.date()
            .default(() => new Date().toISOString().substring(0, 10))
            .max(
              new Date(Date.now() + 3600 * 1000 * 24),
              'Utilize uma data até o dia de hoje',
            ),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('employees', data);

        history.push('/');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [history],
  );

  if (!state?.employee) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Header size="small" />
      <Container>
        <h1>Editar funcionário</h1>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            ...state?.employee,
            created_at:
              created_at && formatISO(created_at, { representation: 'date' }),
          }}
        >
          <Input name="name" placeholder="Nome" />
          <Input name="position" placeholder="Cargo" />
          <Input name="CPF" placeholder="CPF" disabled />
          <Input name="UF" placeholder="UF" />
          <Input
            name="salary"
            placeholder="Salário"
            type="number"
            min="0"
            step="0.01"
          />
          <Input name="status" placeholder="ATIVO | INATIVO | BLOQUEADO" />
          <Input name="created_at" type="date" />
          <button type="submit">Enviar</button>
        </Form>
      </Container>
    </>
  );
};

export default Edit;
