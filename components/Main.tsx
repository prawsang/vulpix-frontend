import { Box } from '@chakra-ui/react';

const Main = ({ children }) => {
  return (
    <Box mt={{ base: '48px', md: '52px' }} minHeight="calc(100vh - 157px)">
      {children}
    </Box>
  );
};

export default Main;
