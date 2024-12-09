import { Flex, Stack, Box, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Outlet, Link, useLocation} from "react-router-dom";

export const Configuration = () => {
  const { t } = useTranslation()

  const viewConfigure = [
    { path: '', title: t('configure.language.title')},
    { path: 'notificationSetting', title: t('configure.notificationSetting.title')},
    { path: 'passwordManagement', title: t('configure.passwordManagement.title')},
    { path: 'deleteAccount', title: t('configure.delete-account.title')}
  ];
  const location = useLocation()
  const partialPathname = location.pathname.split('/').slice(2) 
  const pathname = partialPathname.length == 0 ? '' : partialPathname[0]

  return (
    <Flex flexDirection='column'>
      <Stack  wrap={'wrap'} justifyContent={'center'} direction={'row'}>
        {viewConfigure.map((item) => (
          <Link key={item.path} to={`${item.path}`}>
            <Button
              key={item.path}
              size={{ base: 'sm', lg: 'md' }}
              colorPalette={'border'}
              variant='outline'
              borderColor={pathname == item.path ? 'blue' : '#ccc'}
            >
              {item.title}
            </Button>
          </Link>
        ))}

      </Stack>
      <Box mt={4}>
        <Outlet />
      </Box>
    </Flex>
  );
};
