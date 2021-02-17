import { Select as CSelect, SelectProps } from '@chakra-ui/react';

const Select = (props: SelectProps) => {
  return (
    <CSelect
      bg="gray.300"
      borderColor="gray.300"
      _focus={{ borderColor: 'brand.500' }}
      maxWidth="100%"
      {...props}
    />
  );
};

export default Select;
