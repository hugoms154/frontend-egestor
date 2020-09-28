import React, { useCallback, useRef, useState } from 'react';

import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import api from '../../services/api';

import Header from '../../components/Header';
import Select from '../../components/Select';
import SearchInput from '../../components/SearchInput';

import { Container } from './styles';

interface EmployeeData {
  select: string;
  name: string;
  position: string;
  CPF: string;
  UF: string;
  min: number;
  max: number;
  status: string;
  date: string;
}

interface Employee {
  id: string;
  name: string;
  position: string;
  CPF: string;
  UF: string;
  salary: number;
  status: string;
  created_at: string;
}

interface ISelect {
  select: string;
}

const Search: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [selected, setSelected] = useState('');
  const [employees, setEmployees] = useState<Employee[]>([]);

  const handleSubmit = useCallback(
    async (data: EmployeeData) => {
      try {
        formRef.current?.setErrors({});

        const schemaName = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
        });

        const schemaCPF = Yup.object().shape({
          CPF: Yup.string()
            .length(11, 'Necessário ter 11 dígitos para CPF')
            .matches(/^[0-9]*$/, 'Apenas números aceitos.'),
        });

        const schemaPosition = Yup.object().shape({
          position: Yup.string().required('Cargo é obrigatório'),
        });

        const schemaUF = Yup.object().shape({
          UF: Yup.string()
            .length(2, 'Necessário ter 2 dígitos para UF')
            .matches(
              /(RO|AC|AM|RR|PA|AP|TO|MA|PI|CE|RN|PB|PE|AL|SE|BA|MG|ES|RJ|SP|PR|SC|RS|MS|MT|GO|DF)/,
              'Apenas UFs válidas!',
            ),
        });

        const schemaSalary = Yup.object().shape({
          salary: Yup.string().required('Salário é obrigatório'),
        });

        const schemaStatus = Yup.object().shape({
          status: Yup.string()
            .required('Status é obrigatório')
            .matches(
              /(ATIVO|INATIVO|BLOQUEADO)/,
              'Apenas ATIVO, INATIVO ou BLOQUEADO',
            )
            .uppercase(),
        });

        const schemaDate = Yup.object().shape({
          date: Yup.date()
            .default(new Date().toISOString().substring(0, 10))
            .max(
              new Date(Date.now() + 3600 * 1000 * 24),
              'Utilize uma data até o dia de hoje',
            ),
        });

        selected === 'name' &&
          (await schemaName.validate(data, { abortEarly: false }));
        selected === 'CPF' &&
          (await schemaCPF.validate(data, { abortEarly: false }));
        selected === 'UF' &&
          (await schemaUF.validate(data, { abortEarly: false }));
        selected === 'salary' &&
          (await schemaSalary.validate(data, { abortEarly: false }));
        selected === 'status' &&
          (await schemaStatus.validate(data, { abortEarly: false }));
        selected === 'date' &&
          (await schemaDate.validate(data, { abortEarly: false }));
        selected === 'position' &&
          (await schemaPosition.validate(data, { abortEarly: false }));

        if (selected === 'salary') {
          const { data: responseData } = await api.get<Employee[]>(
            `employees/${selected}`,
            {
              params: { min: data.min, max: data.max },
            },
          );
          setEmployees(responseData);
        } else {
          let value = formRef.current?.getFieldValue(selected);
          if (selected === 'date') {
            const [year, month, day] = value.split('-');

            value = `${day}/${month}/${year}`;
          }

          const { data: responseData } = await api.get<Employee[]>(
            `employees/${selected}`,
            {
              params: { value },
            },
          );
          setEmployees(responseData);
        }
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);
        }
      }
    },
    [selected],
  );

  const handleChangeSelect = useCallback(() => {
    if (!formRef.current?.getData() || formRef.current?.getData() === undefined)
      return;

    const { select } = formRef.current.getData() as ISelect;
    setSelected(select);
  }, []);

  return (
    <>
      <Header size="large" />
      <Container>
        <Form
          ref={formRef}
          onSubmit={handleSubmit}
          initialData={{
            date: new Date().toISOString().substring(0, 10),
          }}
        >
          <Select
            name="select"
            defaulOption="Selecione pelo que quer buscar"
            onChange={handleChangeSelect}
            defaultValue="default"
          >
            <option value="name">Nome</option>
            <option value="position">Cargo</option>
            <option value="CPF">CPF</option>
            <option value="date">Data</option>
            <option value="UF">UF</option>
            <option value="salary">Salário</option>
            <option value="status">Status</option>
          </Select>

          {selected === 'name' && (
            <SearchInput name="name" placeholder="Nome" />
          )}
          {selected === 'position' && (
            <SearchInput name="position" placeholder="Cargo" />
          )}
          {selected === 'CPF' && <SearchInput name="CPF" placeholder="CPF" />}
          {selected === 'date' && (
            <SearchInput name="date" type="date" placeholder="Data" />
          )}
          {selected === 'UF' && <SearchInput name="UF" placeholder="UF" />}
          {selected === 'salary' && (
            <>
              <SearchInput name="min" placeholder="Mínimo" />
              <SearchInput name="max" placeholder="Máximo" />
            </>
          )}
          {selected === 'status' && (
            <SearchInput name="status" placeholder="Status" />
          )}

          <button type="submit">Buscar</button>
          <h1>WELMCOME</h1>
        </Form>

        {/* {employees.map(employee => (
          <h1 key={employee.id}>{employee.name}</h1>
        ))} */}
      </Container>
    </>
  );
};

export default Search;
