import { Input } from "@chakra-ui/react";

const StyledInput = (props) => {
  return (
    <Input
      boxShadow="0 8px 24px rgba(0,0,0,0.1)"
      bg="white"
      borderRadius="8px"
      _focus={{
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
      }}
      border="none"
      {...props}
    />
  );
};

export default StyledInput;
