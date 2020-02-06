import React from "react"
import { Link } from "gatsby"
import scrollTo from "gatsby-plugin-smoothscroll"
import ContactSection from "src/components/ContactSection"

import Image from "src/components/image"
import {
  Banner,
  BannerRow,
  Section,
  Button,
  Layout,
  Row,
  Col,
  WhatsappLink,
} from "src/components/ui"
import { H1, H2, H3, P } from "src/components/text"

import { WhySectionImg, ProjectImg, ProjectCol } from "./_components"
import content from "src/content"

const Home = () => {
  const { projects } = content.index

  return (
    <Layout>
      <Banner>
        <BannerRow>
          <Col size={"1.8"} alignItemsLg="flex-start">
            <H1>
              Looking for an experienced <mark>WEB</mark> and{" "}
              <mark>MOBILE</mark> app developer?
            </H1>
            <Button onClick={() => scrollTo("#presentation")}>
              Yes! Please, tell me more
            </Button>
          </Col>
          <Col size={"1.2"} display={"block"} className="image-wrapper">
            <Image />
          </Col>
        </BannerRow>
      </Banner>
      <Section id="presentation" variant="secondary">
        <H2 secondary>Then, look no further</H2>
        <H1 style={{ textAlign: "center" }}>
          Hi, my name is Brunno Vodola and I am a full-stack developer.
        </H1>
        <Button onClick={() => scrollTo("#projects")}>
          Checkout my Projects
        </Button>
      </Section>
      <Section>
        <H2>Why should you hire me?</H2>
        <Row stacked>
          <Col>
            <WhySectionImg src="/img/commitment.png" alt="" />
            <H3>
              Commitment
              <br />
              to your project
            </H3>
            <P>
              Your success is my success! I'll tackle your project with owner's
              mindset and make sure it is everything you want it to be and more!
            </P>
          </Col>
          <Col>
            <WhySectionImg src="/img/chat.png" alt="" />
            <H3>
              Great
              <br />
              communication
            </H3>
            <P>
              I'll always be available to answer your questions, before, during
              and after the project.
            </P>
          </Col>
          <Col>
            <WhySectionImg src="/img/medal.png" alt="" />
            <H3>
              Validated by
              <br />
              great clients
            </H3>
            <P>
              I have been hired by great clients and delivered them awesome,
              successful projects. Checkout my past Projects and see it for
              yourself!
            </P>
          </Col>
        </Row>
        <Button>Hire me</Button>
      </Section>
      <Section id="projects" variant="secondary">
        <H2>Projects</H2>

        {projects.map(project => (
          <Row key={project.link}>
            <Col>
              <ProjectImg src={project.image} />
            </Col>
            <ProjectCol>
              <H3>{project.title}</H3>
              <P>{project.short_description}</P>
              <Link to={project.link}>
                <Button primary>Project details</Button>
              </Link>
            </ProjectCol>
          </Row>
        ))}
      </Section>
    </Layout>
  )
}

export default Home
