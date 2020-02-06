import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Memo Meister</H2>
      <Row>
        <Col>
          <img src="/img/projects/memo-meister/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            This was a one-year contract to be part of the team that was
            responsible for the maintenance, bug fixing, new features and
            performance improvement of a native app on both iOS and Android
            platfortms.
          </P>
          <P>
            Among the many tasks I was assigned, the most impactful one was
            actually{" "}
            <mark>
              improving the main app screens general performance a measureable
              200%
            </mark>
            .
          </P>
          <P>
            You can download this App on both AppStore and GooglePlay: lookup
            for <b>MemoMeister</b>
          </P>
          <P>
            <b>This was a contract that lasted for 1 year</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>App Screens</H3>
      <br />
      <ProjectImages
        project_name="memo-meister"
        images={["app1", "app2", "app3", "app4"]}
      />
    </Section>
  </Layout>
)
