import { useState } from "react";
import Head from "components/Head";
import {
  Container,
  Text,
  Heading,
  Button,
  ButtonGroup,
  Input,
  VStack,
} from "@chakra-ui/react";
import useCount from "utils/hooks/useCount";

const Home = () => {
  const { count, increase, decrease } = useCount(1);
  const [value, setValue] = useState("1");

  const onIncreaseClick = () => {
    increase(parseInt(value));
  };
  const onDecreaseClick = () => {
    decrease(parseInt(value));
  };
  const onInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <Head pageName="Home" />
      <Container paddingTop="64px">
        <VStack spacing="24px">
          <Heading as="h1" size="2xl">
            Welcome!
          </Heading>
          <Text>Use the buttons below to change the number.</Text>
          <Heading as="h3" size="lg">
            {count}
          </Heading>
          <Text>Increase/decrease by:</Text>
          <Input
            value={value}
            onChange={onInputChange}
            placeholder="Enter a Number"
            type="number"
          />
          <ButtonGroup>
            <Button onClick={onIncreaseClick}>Increase</Button>
            <Button onClick={onDecreaseClick}>Decrease</Button>
          </ButtonGroup>
        </VStack>
      </Container>
    </div>
  );
};

export default Home;
