import React from "react";
import { Card, CardInfo, CardImage } from "./styled";

const MiniCard = () => {
  return (
    <Card>
      <CardInfo>
        <h1>Lorem Impsun dolor sit </h1>
        <p>Jul 26 - 7 min read</p>

        <p>Nombre Autor - Luchardo</p>
      </CardInfo>

      <CardImage src="https://media-exp1.licdn.com/dms/image/C4E03AQGYr5LDiMx7ZQ/profile-displayphoto-shrink_200_200/0?e=1602720000&v=beta&t=GfJWLDqGg5unm5Wvu1-FrwNPSw5kLPP6WxRtTOQEX5c"></CardImage>
    </Card>
  );
};

export default MiniCard;
