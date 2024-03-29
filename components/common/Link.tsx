import Link, { LinkProps } from 'next/link'
import styled from '@emotion/styled'
import { typography, space, color, TypographyProps, SpaceProps, ColorProps } from 'styled-system'

const StyledLink = styled('a')(typography, space, color)
interface Props extends TypographyProps, SpaceProps, ColorProps, LinkProps {
  children: React.ReactNode
}

const L = (props: Props) => {
  return (
    <Link href={props.href}>
      <StyledLink {...props}>{props.children}</StyledLink>
    </Link>
  )
}

export default L
