import React from "react";
import { CardContainer, Card, CardImage } from "./styled";

const HeroCard = () => {
  return (
    <CardContainer>
      <Card>
        <CardImage src="https://como-funciona.com/wp-content/uploads/2019/09/c%C3%B3mo-funciona-un-paisaje-800x400.jpg" />
        <h1>HeroCard</h1>
      </Card>
    </CardContainer>
  );
};

export default HeroCard;
