import { Select as CSelect } from "@chakra-ui/react";

const Select = (props) => {
  return (
    <CSelect
      bg="gray.300"
      _focus={{ borderColor: "brand.500" }}
      maxWidth="100%"
      {...props}
    />
  );
};

export default Select;
