import { Button as CButton } from "@chakra-ui/react";

const Button = (props) => {
  return (
    <CButton
      bg="brand.500"
      borderRadius="999px"
      color="white"
      boxShadow="0 6px 16px rgba(255,30,5,0.5)"
      textTransform="uppercase"
      fontSize="14px"
      paddingX="24px"
      paddingY="8px"
      minWidth="180px"
      _hover={{
        bg: "brand.500",
      }}
      {...props}
    />
  );
};

export default Button;
