import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const Card = styled.div`
  width: 100%;
  height: 130px;
  background: #323232;
`;

const CardImage = styled.div`
  width: 100%;
  height: 230px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
`;
export { CardContainer, Card, CardImage };
