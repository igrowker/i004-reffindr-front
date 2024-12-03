import { Box, Button, HStack } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

import { TenantRoles } from '@/constants/tenant-constants'
import { useTenantStore } from '@/stores/tenantStore'

export const SelectorTypeComponent = () => {
  const { t } = useTranslation()

  const { tenantRole, toggleTenantRole } = useTenantStore((state) => state)
  return (
    <HStack wrap='wrap' mb={2} gap='5'>
      <Box borderBottom={tenantRole === TenantRoles.incomming ? '3px solid #1E3A8A' : undefined}>
        <Button
          _disabled={{ cursor: 'pointer' }}
          disabled={tenantRole === TenantRoles.incomming}
          onClick={toggleTenantRole}
          variant='plain'
        >
          {t('incoming')}
        </Button>
      </Box>
      <Box borderBottom={tenantRole === TenantRoles.outgoing ? '3px solid #1E3A8A' : undefined}>
        <Button
          _disabled={{ cursor: 'pointer' }}
          disabled={tenantRole === TenantRoles.outgoing}
          onClick={toggleTenantRole}
          variant='plain'
        >
          {t('outgoing')}
        </Button>
      </Box>
    </HStack>
  )
}
