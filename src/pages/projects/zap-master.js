import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Zap Master</H2>
      <Row>
        <Col>
          <img src="/img/projects/zap-master/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            This is an ongoing project that aims to create a WhatsApp Marketing
            system that allows for message templates, message sequences, bots
            and many more features.
          </P>

          <P>
            <mark>
              This will allow companies that use WhatsApp for marketing to
              leverage the platform and accomplish significant increase in
              performance and, consequently, sales.
            </mark>
          </P>
          <P>
            <b>This is an ongoing project</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>App Screens</H3>
      <br />
      <ProjectImages
        project_name="zap-master"
        images={["zap1", "zap2", "zap3"]}
      />
    </Section>
  </Layout>
)
