import { Box, Flex, Button, Link, Heading, Grid, Text, Input } from "@chakra-ui/react"
import { ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom"


interface Props {
    title: string;
    headIcon: ReactNode;
    backgroundImage: string;
}

export const HeadSection = ({ title, headIcon, backgroundImage }: Props) => {

    return (
        <Box  bgBlendMode="multiply" bgColor="blackAlpha.600" bgImage={`url(${backgroundImage})`}>
            <Flex flexDirection="column" minH="100vh" >
                <Flex py={6} >
                    <Box px={4} >{headIcon}</Box>
                    <Flex px={8} justifyContent="end" flexGrow={1} gapX={8} >
                        <Link color="white" asChild variant="underline">
                            <RouterLink to="">Soy propietario</RouterLink>
                        </Link>
                        <Button variant="solid" colorPalette={"blue"} >
                            Iniciar sesión
                        </Button>
                    </Flex>
                </Flex>
                <Grid gapY={10} whiteSpace={"pre-line"} placeContent="center" flexGrow={1}>
                    <Heading px={4} size="4xl" textAlign="center" color="white">{title}</Heading>

                    <Text textAlign="center"   color="whiteAlpha.800" >
                        Nuestra plataforma conecta a inquilinos y propietarios, eliminando &#10; la necesidad de intermediarios y las comisiones elevadas.
                    </Text>
                    <Flex gapX={10}>
                        <Input variant={"subtle"} colorPalette="blue" bg={"white"} placeholder="Email" />
                        <Button variant="solid" colorPalette="blue">Registrate</Button>
                    </Flex>
                </Grid>
            </Flex>
        </Box>
    )
}
