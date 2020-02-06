import styled from "styled-components"

const Button = styled.button`
  background-color: ${props =>
    props.primary ? props.theme.colors.main : props.theme.colors.contrast};
  color: ${props => props.theme.colors.text.contrast};
  border-radius: 4px;
  border: none;
  padding: 10px 20px;
  font-size: ${props => props.theme.fontSize.normal};
  cursor: pointer;
  margin-top: 36px;
`

export default Button
