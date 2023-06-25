export enum ValidationErrorTexts {
  EMAIL_IS_EMPTY = 'Must not be empty',
  INVALID_EMAIL = 'Invalid email format',
  PASSWORD_EMPTY = 'Password must not be empty',
  INVALID_PASSWORD = 'Invalid password: must be greater than 8'
}

export const validatorSchema = {
  email: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.EMAIL_IS_EMPTY
    },
    isEmail: {
      func: (value: string) =>
        /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(
          value
        ),
      error: ValidationErrorTexts.INVALID_EMAIL
    }
  },
  password: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: ValidationErrorTexts.PASSWORD_EMPTY
    },
    isValidPassword: {
      func: (value: string) => value.length !== 0 && value.length > 8,
      error: ValidationErrorTexts.INVALID_PASSWORD
    }
  }
};
