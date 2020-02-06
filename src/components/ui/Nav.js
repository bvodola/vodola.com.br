import styled from "styled-components"

const Nav = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 1;
  background-color: #2c74d2;
  color: #fff;
  ${props => props.theme.contentPadding};
  padding-top: 24px;
  padding-bottom: 24px;

  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;

  h1 {
    font-size: 20px;
    color: #fff;
  }

  ul {
    display: flex;
    list-style-type: none;

    li {
      margin-left: 16px;

      a {
        text-decoration: none;
        color: ${props => props.theme.colors.text.contrast};
      }
    }
  }
`

export default Nav
