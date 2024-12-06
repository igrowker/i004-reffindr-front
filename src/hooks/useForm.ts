import { ChangeEvent, useState } from 'react'

type FormState<T> = {
  [K in keyof T]: T[K]
}

type FormErrors<T> = {
  [K in keyof T]?: string | null
}
export const useForm = <T>(initialState: FormState<T>, validate: (values: FormState<T>) => FormErrors<T>) => {
  const [formState, setFormState] = useState<FormState<T>>(initialState)
  const [errors, setErrors] = useState<FormErrors<T>>({})


  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.currentTarget

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate({ ...formState, [name]: value })[name as keyof T],
    }))
  }

  const resetForm = () => {
    setFormState(initialState)
  }
  // const handleCheckBoxChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   const { name, checked } = event.currentTarget

  //   setFormState((prevState) => ({
  //     ...prevState,
  //     [name]: checked,
  //   }))
  // }
  const onCheckboxChange = ({ name, checked }: {name: string, checked: boolean}) => {
    setFormState(prev => ({
      ...prev,
      [name]: checked
    }))
  }
  const assignAllNewValues = (values: Partial<T>) => {
    setFormState({ ...formState, ...(values as T) })
  }

  const handleSubmit = (onSubmit: () => void) => {
    const validationErrors = validate(formState)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).every((key) => validationErrors[key as keyof T] === null)) {
      onSubmit()
    }
  }

  return {
    formState,
    errors,
    handleInputChange,
    onCheckboxChange,
    handleSubmit,
    assignAllNewValues,
    resetForm
  }
}
