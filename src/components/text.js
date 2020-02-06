import styled from "styled-components"

const H1 = styled.h1`
  text-align: center;
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.h1};
  color: ${props => props.theme.colors.main};
  margin-top: 24px;

  @media (min-width: 900px) {
    text-align: left;
    font-size: ${props => props.theme.fontSize.h1_lg};
  }
`

const H2 = styled.h2`
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.h2};
  color: ${props =>
    props.secondary ? props.theme.colors.text.main : props.theme.colors.main};
  margin-top: 24px;
`

const H3 = styled.h3`
  font-weight: bold;
  font-size: ${props => props.theme.fontSize.h3};
  margin-top: 24px;
  color: ${props => props.theme.colors.text.main};
`

const P = styled.p`
  font-size: ${props => props.theme.fontSize.normal};
  margin-top: 12px;
  color: ${props => props.theme.colors.text.main};
  width: 100%;
`

export { H1, H2, H3, P }
