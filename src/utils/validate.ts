const validateEmail = (email: string | null): string | null => {
  if (!email) return 'Email is required'
  if (!/\S+@\S+\.\S+/.test(email)) return 'Email address is invalid'
  return null
}

const validatePassword = (password: string | null): string | null => {
  if (!password) return 'Password is required'
  if (password.length <= 3) return 'Password must be longer than 3 characters'
  return null
}

export const validateLogin = (values: { email: string; password: string }) => {
  const errors: { email: string | null; password: string | null } = { email: null, password: null }
  errors.email = validateEmail(values.email)
  errors.password = validatePassword(values.password)
  return errors
}

export const validateRegister = (values: { name: string; lastName: string; email: string; password: string }) => {
  const errors: { name: string | null; lastName: string | null; email: string | null; password: string | null } = {
    name: null,
    lastName: null,
    email: null,
    password: null,
  }

  if (!values.name) {
    errors.name = 'Name is required'
  } else if (values.name.length <= 3) {
    errors.name = 'Name must be longer than 3 characters'
  }

  if (!values.lastName) {
    errors.lastName = 'Last Name is required'
  } else if (values.lastName.length <= 3) {
    errors.lastName = 'Last Name must be longer than 3 characters'
  }

  errors.email = validateEmail(values.email)
  errors.password = validatePassword(values.password)

  return errors
}
