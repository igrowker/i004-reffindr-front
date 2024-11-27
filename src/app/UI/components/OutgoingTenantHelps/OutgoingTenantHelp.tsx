import { Fieldset, Text } from "@chakra-ui/react"
import { Field } from "@/components/ui/field"
import { NativeSelectRoot } from "@/components/ui/native-select"
import { useTranslation } from "react-i18next"

const data = [
  {
    ask: 'TenantHelp.data.ask-1',
    answer: 'TenantHelp.data.answer-1'
  },
  {
    ask: 'TenantHelp.data.ask-2',
    answer: 'TenantHelp.data.answer-2'
  },
  {
    ask: 'TenantHelp.data.ask-3',
    answer: 'TenantHelp.data.answer-3'
  },
  {
    ask: 'TenantHelp.data.ask-4',
    answer: 'TenantHelp.data.answer-4'
  }
]

export const OutgoingTenantHelp = () => {
  const { t } =useTranslation()

  return (
    <Fieldset.Root size="lg" invalid p={3} gapY={3}>
      <Fieldset.Legend fontSize={24} p={5}>{t('TenantHelp.title')}</Fieldset.Legend>
      
      {data.map((item) => (
      <Fieldset.Content>
        <Field>
          <NativeSelectRoot h={'47px'} border={'solid 1px gray'} borderRadius={5} alignItems={'center'} px={3} >            
              {[t(item.ask)]}            
          </NativeSelectRoot>
        </Field>
        <Field>
          <Text p={3} boxShadow={'lg'} borderRadius={5}>{t(item.answer)}</Text>
        </Field>
      </Fieldset.Content>
      ))}
    </Fieldset.Root>
  )
}
