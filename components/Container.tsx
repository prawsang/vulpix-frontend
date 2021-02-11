import { Container as CContainer } from "@chakra-ui/react";

const Container = (props) => {
  const { maxWidth = "1100px" } = props;
  return (
    <CContainer width="90%" maxW={maxWidth} {...props}>
      {props.children}
    </CContainer>
  );
};

export default Container;
