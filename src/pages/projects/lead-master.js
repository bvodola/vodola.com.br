import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "./_components"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Lead Master</H2>
      <Row>
        <Col>
          <img src="/img/projects/lead-master/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            This is a CRM and document generation system tailor-made for law
            firms.
          </P>
          <P>
            Among this systems benefits, the most impactful one was actually{" "}
            <mark>
              plunging the time needed to fill-up and print a client's set of
              legal forms from about 10 minutes to about 30 seconds.
            </mark>
            .
          </P>
          <P>This is a closed project for now, so it can't be accessed</P>
          <P>
            <b>This Project was delivered in 1 month</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>App Screens</H3>
      <br />
      <ProjectImages project_name="lead-master" images={["app1", "app2"]} />
    </Section>
  </Layout>
)
