import React from "react"
import { Section, Row, WhatsappLink } from "src/components/ui"
import { H2, H3 } from "src/components/text"

const Contact = () => (
  <Section id="contact">
    <H2>Get in Touch or Hire Me</H2>
    <H3>brunno@vodola.com.br</H3>
    <Row paddedSm>
      <WhatsappLink
        displayPhone="+55 (11) 99966-8246"
        linkPhone="5511999668246"
      />
    </Row>
  </Section>
)

export default Contact
