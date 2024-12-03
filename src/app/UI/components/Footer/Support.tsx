import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Support = () => {
  const { t } = useTranslation()

  return (
    <Box w={{ base: "full", md: "50%" }} display="flex" flexDirection="column" gapY={{base:'1', md:'2'}}>
      <Heading as="h3" fontSize="xl" fontWeight="semibold" mb={{base:'2', md:'5'}}>
        {t('landing.footer.support.title')}
      </Heading>
      <Link to="#">
      {t('landing.footer.support.link-1')}
      </Link>
      <Link to="#" color="white">
        {t('landing.footer.support.link-2')}
      </Link>
      <Link to="#" color="white">
        {t('landing.footer.support.link-3')}
      </Link>
      <Link to="#" color="white">
        {t('landing.footer.support.link-4')}
      </Link>
    </Box>
  );
};
