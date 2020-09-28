import React, { SelectHTMLAttributes, useEffect, useRef } from 'react';
import { FiAlertCircle } from 'react-icons/fi';
import { useField } from '@unform/core';

import { Container, Error } from './styles';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  defaulOption: string;
}

const Select: React.FC<SelectProps> = ({
  name,
  className,
  defaulOption,
  children,
  ...rest
}) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container className={className}>
      <select ref={selectRef} defaultValue={defaultValue} {...rest}>
        <option value="default" disabled>
          {defaulOption}
        </option>
        {children}
      </select>

      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Select;
