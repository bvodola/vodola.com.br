import React from "react"
import { Row, Col } from "src/components/ui"

const ProjectImages = ({ project_name, images }) => (
  <Row stacked>
    {images.map(img => (
      <Col key={img}>
        <a href={`/img/projects/${project_name}/${img}.jpg`} target="_blank">
          <img src={`/img/projects/${project_name}/${img}.jpg`} alt="" />
        </a>
      </Col>
    ))}
  </Row>
)

export { ProjectImages }
