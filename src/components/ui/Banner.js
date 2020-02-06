import styled from "styled-components"
import { Row } from "./Grid"

const Banner = styled.div`
  flex-direction: column-reverse;

  display: flex;
  padding: 0 24px;
  ${props => props.theme.contentPadding}
  ${props => props.theme.sectionPadding}
  padding-top: 80px;

  div.heading {
    flex: 1.8;
  }

  div.hero {
    flex: 1.2;
  }

  h1 {
    color: ${props => props.theme.colors.text.main};
    margin-top: 48px;
    mark {
      color: ${props => props.theme.colors.main};
      background-color: transparent;
    }
  }
`

const BannerRow = styled(Row)`
  flex-direction: column-reverse;
  .image-wrapper {
    padding: 0 20%;
  }

  @media (min-width: 900px) {
    flex-direction: row;
    .image-wrapper {
      padding: 0;
    }
  }
`

export default Banner
export { BannerRow }
