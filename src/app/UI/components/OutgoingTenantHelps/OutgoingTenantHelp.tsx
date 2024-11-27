import { Fieldset, Text } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { Field } from '@/components/ui/field'
import { NativeSelectRoot } from '@/components/ui/native-select'

const data = [
  {
    ask: 'TenantHelp.data.ask-1',
    answer: 'TenantHelp.data.answer-1',
  },
  {
    ask: 'TenantHelp.data.ask-2',
    answer: 'TenantHelp.data.answer-2',
  },
  {
    ask: 'TenantHelp.data.ask-3',
    answer: 'TenantHelp.data.answer-3',
  },
  {
    ask: 'TenantHelp.data.ask-4',
    answer: 'TenantHelp.data.answer-4',
  },
]

export const OutgoingTenantHelp = () => {
  const { t } = useTranslation()

  return (
    <Fieldset.Root size='lg' invalid gapY={1} bg={'white'} padding={5} border={'solid 1px #d3d3d3'}>
      <Fieldset.Content fontSize={24} fontWeight={'bold'}>
        {t('TenantHelp.title')}
      </Fieldset.Content>
      <hr style={{ maxWidth: '450px', width: '100%', backgroundColor: '#d3d3d3', height: '3px', border: 'none' }} />

      {data.map((item, index) => (
        <Fieldset.Content key={index}>
          <Field>
            <NativeSelectRoot
              h={'40px'}
              border={'solid 1px #d3d3d3'}
              borderRadius={5}
              alignItems={'center'}
              px={3}
              fontWeight={'medium'}
            >
              {[t(item.ask)]}
            </NativeSelectRoot>
          </Field>
          <Field>
            <Text p={3} boxShadow={'lg'} borderRadius={5}>
              {t(item.answer)}
            </Text>
          </Field>
        </Fieldset.Content>
      ))}
    </Fieldset.Root>
  )
}
