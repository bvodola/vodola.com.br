import React from "react"
import styled from "styled-components"
import { Row, Col } from "src/components/ui"

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

const ProjectImages = ({ project_name, images }) => (
  <Row stacked>
    {images.map(img => (
      <Col key={img}>
        <a
          href={`/img/projects/${project_name}/${img}.jpg`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={`/img/projects/${project_name}/${img}.jpg`} alt="" />
        </a>
      </Col>
    ))}
  </Row>
)

export { ProjectImages, WhySectionImg, ProjectImg, ProjectCol }
