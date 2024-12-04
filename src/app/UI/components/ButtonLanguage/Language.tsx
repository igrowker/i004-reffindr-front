import { Button, Flex, Text, FlexProps, ButtonProps } from "@chakra-ui/react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { FaFlagUsa } from "react-icons/fa";

interface LanguageProps extends FlexProps {
  buttonStyles?: ButtonProps;
}

export const Language: React.FC<LanguageProps> = ({ buttonStyles, ...flexProps }) => {
  const { i18n, t } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setSelectedLanguage(lng);
  };

  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent="center"

      {...flexProps}
    >
      <Button
        display="flex"
        alignItems="center"
        justifyContent="start"
        borderRadius="0px"
        gap={2}
        variant="ghost"
        bg={selectedLanguage === "en" ? "gray.100" : "transparent"}
        color="black"
        _hover={{ bg: "gray.50" }}
        onClick={() => changeLanguage("en")}
        {...buttonStyles}
      >
        <FaFlagUsa />
        <Text fontSize="md" fontWeight="semibold" cursor="pointer">
          {t("Language.ingles-english")}
        </Text>
      </Button>

      <Button
        display="flex"
        alignItems="center"
        justifyContent="start"
        borderRadius="0px"
        gap={2}
        variant="ghost"
        bg={selectedLanguage === "es" ? "gray.100" : "transparent"}
        color="black"
        _hover={{ bg: "gray.50" }}
        onClick={() => changeLanguage("es")}
        {...buttonStyles}
      >
        <FaFontAwesomeFlag size="20px" />
        <Text fontSize="md" fontWeight="semibold" cursor="pointer">
          {t("Language.español-spanish")}
        </Text>
      </Button>
    </Flex>
  );
};
