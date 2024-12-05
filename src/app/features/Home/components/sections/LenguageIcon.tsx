import {  IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { TfiWorld } from 'react-icons/tfi'

import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from '@/components/ui/menu'

export const LenguageIcon = () => {
  const { i18n, t } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState<string>('')

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setSelectedLanguage(lng)
  }
  return (
    <MenuRoot>
      <MenuTrigger>
        <IconButton variant='ghost' rounded='full' _hover={{ bg: 'transparent' }} boxSize="40px">
          <TfiWorld color='white'  />
        </IconButton>
      </MenuTrigger>

      <MenuContent>
        <MenuItem
          value='new-file'
          onClick={() => changeLanguage('en')}
          bg={selectedLanguage === 'en' ? 'gray.50' : 'transparent'}
          _hover={{ color: 'blue.500' }}
        >
          {t('Language.ingles-english')}
        </MenuItem>
        <MenuItem
          value='new-txt'
          onClick={() => changeLanguage('es')}
          bg={selectedLanguage === 'es' ? 'gray.50' : 'transparent'}
          _hover={{ color: 'blue.500' }}
        >
          {t('Language.español-spanish')}
        </MenuItem>
      </MenuContent>
    </MenuRoot>
  )
}
