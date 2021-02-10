import { Container } from "@chakra-ui/react";

const MyContainer = (props) => {
  return (
    <Container maxW="1100px" {...props}>
      {props.children}
    </Container>
  );
};

export default MyContainer;
