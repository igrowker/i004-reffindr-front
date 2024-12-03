import { Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";

export const Language = () => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <>
      <Flex w={'full'} display={"flex"} alignItems={'center'} justifyContent={'center'} p={1} mb={5}>
            <Button
              display="flex"
              alignItems="center"
              justifyContent="start"
              borderRadius={"0px"}
              gap={2}
              variant="ghost"
              bg={selectedLanguage === "en" ? "gray.100" : "transparent"}
              color={"black"}
              _hover={{ bg: "gray.50"}}
              onClick={() => changeLanguage("en")}
            >
              <FaFlagUsa />
              <Text fontSize="md" fontWeight="semibold" cursor="pointer">
                {t('Language.ingles-english')}
              </Text>
            </Button>

            <Button
              display="flex"
              alignItems="center"
              justifyContent="start"
              borderRadius={"0px"}
              gap={2}
              variant="ghost"
              bg={selectedLanguage === "es" ? "gray.100" : "transparent"}
              color={"black"}
              _hover={{ bg: "gray.100" }}
              onClick={() => changeLanguage("es")}
            >
              <FaFontAwesomeFlag size={'20px'} />
              <Text fontSize="md" fontWeight="semibold" cursor="pointer">
                {t('Language.español-spanish')}
              </Text>
            </Button>
      </Flex>
    </>
  )
}
