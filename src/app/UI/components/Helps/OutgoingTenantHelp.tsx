import { Fieldset, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import {
  NativeSelectRoot,
} from "@/components/ui/native-select"

const data = [
  {
    ask: '¿Qué es Reffindr y cómo me beneficia como inquilino saliente?',
    answer: 'Reffindr es una plataforma que te permite referir a nuevos candidatos para ocupar el departamento que estás dejando. Al hacer una recomendación, puedes ganar una comisión reducida, lo que puede ayudarte con los gastos de mudanza, y al mismo tiempo, el nuevo inquilino puede acceder a una comisión más baja que la de una agencia tradicional.'
  },
  {
    ask: '¿Cómo funciona el proceso de referencia de un nuevo inquilino?',
    answer: 'Cuando decidas dejar tu departamento, podrás recomendar a un nuevo candidato que cumpla con los requisitos establecidos por el propietario o incluso alguien que tenga mejores condiciones, como mayor estabilidad laboral o ingresos. Al hacerlo, recibirás una comisión por la referencia.'
  },
  {
    ask: '¿Puedo recomendar a cualquier persona o tiene que cumplir con requisitos específicos?',
    answer: 'Aunque puedes recomendar a cualquier persona que consideres adecuada, es importante que el candidato cumpla con los requisitos del propietario de la propiedad. Estos pueden incluir condiciones como estabilidad laboral, ingresos suficientes y otros factores relevantes para el alquiler del departamento'
  },
  {
    ask: '¿Qué pasa si el propietario rechaza a la persona que recomendé?',
    answer: 'Aunque puedes recomendar a cualquier persona que consideres adecuada, es importante que el candidato cumpla con los requisitos del propietario de la propiedad. Estos pueden incluir condiciones como estabilidad laboral, ingresos suficientes y otros factores relevantes para el alquiler del departamento'
  }
]

export const OutgoingTenantHelp = () => {
  return (
    <Fieldset.Root size="lg" invalid p={3} gapY={3}>
      <Fieldset.Legend fontSize={24} p={5}>Preguntas frecuentes</Fieldset.Legend>
      
      {data.map((item) => (
      <Fieldset.Content>
        <Field>
          <NativeSelectRoot h={'47px'} border={'solid 1px gray'} borderRadius={5} alignItems={'center'} px={3} >            
              {[item.ask]}            
          </NativeSelectRoot>
        </Field>
        <Field>
          <Text p={3} boxShadow={'lg'} borderRadius={5}>{item.answer}</Text>
        </Field>
      </Fieldset.Content>
      ))}
    </Fieldset.Root>
  )
}
