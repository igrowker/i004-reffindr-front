import { Box, Center, Heading, Image } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export const ErrorBoundary = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error) && error.status == 404) {
    return (
      <div>
        <h1>
          {error.status} {error.statusText}
        </h1>
        <Box position='relative'>
          <Image src={'/assets/not-found.jpeg'} />
          <Center top={"1/2"}>
            <Heading>{error.data}</Heading>
          </Center>
        </Box>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div>
        <h1>Error</h1>
        <p>{error.message}</p>
        <p>Trace is:</p>
        <pre>{error.stack}</pre>
      </div>
    );
  } else {
    return <h1>Error desconocido</h1>;
  }
};
