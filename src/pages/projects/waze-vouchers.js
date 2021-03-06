import React from "react"
import { Layout, Section, Row, Col } from "src/components/ui"
import { H2, H3, P } from "src/components/text"
import { ProjectImages } from "src/components/sections"

export default () => (
  <Layout>
    <Section align="left">
      <H2>Waze CarPool Vouchers</H2>
      <Row>
        <Col>
          <img src="/img/projects/waze-vouchers/image.jpg" alt="" />
        </Col>
        <Col>
          <P>
            <a
              target="_blank"
              href="http://waze-voucher.herokuapp.com/"
              rel="noopener noreferrer"
            >
              Project Link: Voucher System (in Portuguese)
            </a>
          </P>
          <P>
            This project, lead by the Waze Carpool team, was aimed to create a
            rewards exchange system, as part of the client's marketing effort on
            a campaign that took place in Joinville - SC - Brazil.
          </P>
          <P>
            The user was first sent a voucher code on his Waze CarPool App from
            a collection of vouchers that were previously generated by the
            system.
          </P>
          <P>
            With his voucher in hands, he had to go to a{" "}
            <a
              target="_blank"
              href="http://seguetodavidajunto.com.br/"
              rel="noopener noreferrer"
            >
              landing page
            </a>{" "}
            (not created by me) that would explain all the mechanincs of the
            promotion.
          </P>
          <P>
            Finally, he would then proceed to access te rewards system, and
            exchange his voucher for any of the rewards available, provided that
            he had enough points for the desired reward.
          </P>
          <P>
            <b>This project was delivered in 2 weeks</b>
          </P>
        </Col>
      </Row>
    </Section>

    <Section variant="secondary">
      <H3>Voucher Exchange Screens</H3>
      <br />
      <ProjectImages
        project_name="waze-vouchers"
        images={["file1", "file2", "file3"]}
      />
      <br />
      <H3>System Admin Panel</H3>
      <br />
      <ProjectImages
        project_name="waze-vouchers"
        images={["painel-1", "painel-2", "painel-3"]}
      />
    </Section>
  </Layout>
)
