import { HStack, Input, Box, Icon } from '@chakra-ui/react';
import { IoSearchCircleSharp } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { FaSortAmountDownAlt } from "react-icons/fa";
import { IoMdNotificationsOutline } from "react-icons/io";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";

export const SearchWithFiltersAndNotification = () => {
  return (
    <HStack gap="6" width="full" align="center" bg={'white'} py={'1'} px={'2'}>
      {/* este es mi inputt de búsqueda */}
      <Box position="relative" width={'50%'}>
        <Input
          placeholder="Buscar"
          variant={'outline'}
          pr="40px"
          _placeholder={{ color: 'black.500' }}
          _hover={{ borderColor: 'black.400' }}
        />

        <Box
          position="absolute"
          right="1px"
          top="50%"
          transform="translateY(-50%)"
          pointerEvents="none">
          <IoSearchCircleSharp color="blue" size="38px" /> {/*cono search*/}
        </Box>
      </Box>


      {/* este es mi menu de filtros*/}
      <Box width={'50%'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm" display="flex" alignItems="center" gap="8px">
            Filtros
            <FaSortAmountDownAlt size="16px" color="black" />
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="new-txt">Menor precio</MenuItem>
          <MenuItem value="new-file">Mayor precio</MenuItem>
        </MenuContent>
      </MenuRoot>

      {/* Íeste es mi icono de  notificacion */}
      <Icon fontSize="2xl" color="black.700">
        <IoMdNotificationsOutline />
      </Icon>
      </Box>
    </HStack>
  );
};
