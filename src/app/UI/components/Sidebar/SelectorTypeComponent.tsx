import { TenantRoles } from '@/constants/tenant-constants'
import { useTenantStore } from '@/stores/tenantStore';
import { Box, Button, HStack } from '@chakra-ui/react'



export const SelectorTypeComponent = () => {

  const { tenantRole, toggleTenantRole } = useTenantStore(state => state);
  return (
    <HStack wrap='wrap' mb={2} gap='6'>
      <Box borderBottom={tenantRole === TenantRoles.incomming ? '3px solid #1E3A8A' : undefined}>
        <Button _disabled={{ cursor: 'pointer' }} disabled={tenantRole === TenantRoles.incomming} onClick={toggleTenantRole} variant='plain'>
          Entrante
        </Button>
      </Box>
      <Box borderBottom={tenantRole === TenantRoles.outgoing ? '3px solid #1E3A8A' : undefined}>
        <Button _disabled={{ cursor: 'pointer' }} disabled={tenantRole === TenantRoles.outgoing} onClick={toggleTenantRole} variant='plain'>
          Saliente
        </Button>
      </Box>
    </HStack >
  )
}
