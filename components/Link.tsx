import Link from "next/link";
import styled from "@emotion/styled";
import { typography, space, color } from "styled-system";

const StyledLink = styled("a")(typography, space, color);

const L = (props) => {
  return (
    <Link href={props.href}>
      <StyledLink {...props}>{props.children}</StyledLink>
    </Link>
  );
};

export default L;
