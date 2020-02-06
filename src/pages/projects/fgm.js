import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "./_components"

export default () => (
  <Layout>
    <Section align="left">
      <H2>FGM dá Sorte</H2>
      <Row>
        <Col>
          <img src="/img/projects/fgm/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            <a target="_blank" href="https://fgmdasorte.com.br/">
              Project Link: Landing Page (in Portuguese)
            </a>
          </P>
          <P>
            This project, issued by FGM, a world reference in odontological
            area, was aimed to create a prize drawing system and campaign based
            on monthly draws.
          </P>
          <P>
            The users, after buying odontological equipment, visits{" "}
            <a target="_blank" href="https://fgmdasorte.com.br/">
              the campaign landing page
            </a>{" "}
            that would explain all the mechanincs of the promotion.
          </P>
          <P>
            Finally, on that same page, he would proceed to register his
            purchase, by inputing some data and also uploading copies of his
            receipts.
          </P>
          <P>
            <b>Obs: This is an ongoing project</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>Landing Page Screens</H3>
      <br />
      <ProjectImages project_name="fgm" images={["proj-1", "proj-2"]} />
      <br />
      <H3> Receipts Admin Screens</H3>
      <br />
      <ProjectImages project_name="fgm" images={["painel-1", "painel-2"]} />
    </Section>
  </Layout>
)
