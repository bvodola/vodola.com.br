import React from "react"
import styled from "styled-components"

const WhatsappLinkWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #67ac5c;
  justify-content: center;
  width: 100%;
  font-size: 20px;
  font-weight: bold;

  img {
    width: 24px;
    margin-right: 12px;
  }

  span {
  }
`

const WhatsappLink = ({ displayPhone, linkPhone }) => (
  <WhatsappLinkWrapper target="_blank" href={`https://wa.me/${linkPhone}`}>
    <img src="/img/whatsapp.png" alt="" />
    <span>{displayPhone}</span>
  </WhatsappLinkWrapper>
)

export default WhatsappLink
