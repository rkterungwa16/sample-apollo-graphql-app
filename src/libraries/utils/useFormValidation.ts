import { useState, useCallback } from 'react';

export interface StateValidatorSchemaInterface {
  [x: string]: {
    isEmpty?: ValidatorInterface;
    isEmail?: ValidatorInterface;
    isValidPassword?: ValidatorInterface;
  };
}

export interface ValidatorInterface {
  func: (value: string) => boolean;
  error: string;
}

export interface StateSchemaInterface {
  [x: string]: string | string[];
}

export function useFormValidation(
  stateSchema: StateSchemaInterface,
  stateValidatorSchema: StateValidatorSchemaInterface
) {
  const [formValues, setValues] = useState(stateSchema);
  const [errors, setErrors] = useState(stateSchema);

  const validateFormFields = useCallback(
    (name: string, value: string) => {
      const validator = stateValidatorSchema;
      const field = validator[name];
      const errors = [];
      let error;

      if (field.isEmpty) {

        error = !field.isEmpty.func(value) ? field.isEmpty.error : '';
        errors.push(error);
      }

      if (field.isEmail) {
        error = !field.isEmail.func(value) ? field.isEmail.error : '';
        errors.push(error);
      }

      if (field.isValidPassword) {
        error = !field.isValidPassword.func(value) ? field.isValidPassword.error : '';
        errors.push(error);
      }

      return errors.filter((_error) => _error.length);
    },
    [stateValidatorSchema]
  );

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): any => {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      const errors = validateFormFields(name, value);

      setValues((prevState) => ({ ...prevState, [name]: value }));
      setErrors((prevState) => ({ ...prevState, [name]: errors }));
    },
    [validateFormFields]
  );

  return {
    handleChange,
    formValues,
    errors
  };
}
