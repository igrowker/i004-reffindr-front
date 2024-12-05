import * as React from 'react'
import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'

export interface CheckboxProps extends ChakraCheckbox.RootProps {
  icon?: React.ReactNode
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.Ref<HTMLLabelElement>
  onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(props, ref) {
  const { icon, children, inputProps, rootRef, name, checked, onCheckedChange, onChange, ...rest } = props
  return (
    <ChakraCheckbox.Root ref={rootRef} {...rest}>
      <ChakraCheckbox.HiddenInput ref={ref} {...inputProps} onChange={onChange} onCheckedChange={} />
      <ChakraCheckbox.Control>{icon || <ChakraCheckbox.Indicator />}</ChakraCheckbox.Control>
      {children != null && <ChakraCheckbox.Label>{children}</ChakraCheckbox.Label>}
    </ChakraCheckbox.Root>
  )
})
