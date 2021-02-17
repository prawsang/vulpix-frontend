import { Container as CContainer } from '@chakra-ui/react';

const Container = (props) => {
  const { maxWidth = '1100px' } = props;
  return (
    <CContainer maxW={maxWidth} {...props}>
      {props.children}
    </CContainer>
  );
};

export default Container;
