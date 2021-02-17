import { Box } from '@chakra-ui/react';

const ApplicationIcon = (props) => {
  const { imageURL, size = '64px' } = props;
  return (
    <Box
      bg="gray.400"
      borderRadius="12.5%"
      bgImage={`url('${imageURL}')`}
      width={size}
      height={size}
      {...props}
    />
  );
};

export default ApplicationIcon;
