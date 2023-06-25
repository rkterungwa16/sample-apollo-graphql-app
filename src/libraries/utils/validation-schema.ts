export const validatorSchema = {
  email: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: 'Must not be empty'
    },
    isEmail: {
      func: (value: string) =>
        /^([a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]{1,64}@([a-zA-Z0-9-]+.[a-zA-Z0-9-]{2,}){1,255}){1,320}$/.test(
          value
        ),
      error: 'Invalid email format'
    }
  },
  password: {
    isEmpty: {
      func: (value: string) => !!value.length,
      error: 'Password must not be empty'
    },
    isValidPassword: {
      func: (value: string) => value.length !== 0 && value.length > 8,
      error: 'Invalid password: must be greater than 8'
    }
  }
};
