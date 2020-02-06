import styled from "styled-components"
import { Col } from "../../../components/ui"

const WhySectionImg = styled.img`
  width: 90px;
  margin-top: 24px;
`

const ProjectImg = styled.img`
  width: 400px;
  max-width: 100%;
  margin-top: 24px;

  @media (min-width: 900px) {
    width: 400px;
  }
`

const ProjectCol = styled(Col)`
  margin-bottom: 60px;
  @media (min-width: 900px) {
    text-align: left;
    align-items: flex-start;

    p {
      text-align: left;
      align-items: flex-start;
    }
  }
`

export { WhySectionImg, ProjectImg, ProjectCol }
