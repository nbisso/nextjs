import styled from "styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0 1em;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 84px;
`;

const CardInfo = styled.div`
  text-align: left;
  flex-basis: 70%;
`;

const CardImage = styled.div`
  flex-basis: 20%;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: center;
  background-position: center;
`;

export { Card, CardInfo, CardImage };
