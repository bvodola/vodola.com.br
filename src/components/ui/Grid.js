import styled from "styled-components"

const Row = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: ${props =>
    props.padded ? "36px" : props.paddedSm ? "18px" : "0"};

  @media (min-width: 900px) {
    flex-direction: row;
  }

  ${props =>
    props.stacked &&
    `
  flex-wrap: wrap;

  > * {
    @media (min-width: 700px) {
      flex-basis: calc(50% - 40px);
      margin: 20px;
    }

    @media (min-width: 900px) {
      flex-basis: calc(33% - 40px);
    }

    @media (min-width: 1200px) {
      flex-basis: calc(25% - 40px);
    }
  `}
`

const Col = styled.div`
  display: ${props => props.display || "flex"};

  align-items: ${props => props.alignItemsSm || "center"};
  @media (min-width: 900px) {
    align-items: ${props => props.alignItemsLg || "center"};
  }

  flex: ${props => (props.size ? props.size : 1)};
  flex-direction: column;
  padding-left: 10px;
  padding-right: 10px;

  :first-child {
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;
  }
`

export { Row, Col }
