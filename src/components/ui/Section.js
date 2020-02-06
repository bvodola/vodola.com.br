import styled from "styled-components"

const Section = styled.div`
  ${props => props.theme.contentPadding};
  ${props => props.theme.sectionPadding}
  background-color: ${props =>
    props.bgColor || props.variant === "secondary"
      ? props.theme.colors.bg.secondary
      : props.theme.colors.bg.main};
  text-align: center;

  h2 {
    margin-bottom: 24px;
  }

  img {
    max-width: 100%;
    border-radius: 4px;
  }

  p {
    text-align: ${props => props.align || "center"};
  }
`

export default Section
