import React from "react";
// import { styled } from "@material-ui/core/styles";
import styled from "styled-components";

import { default as BaseTypography } from "@material-ui/core/Typography";

const Typography = styled(BaseTypography)`
  /* background: linear-gradient(45deg, #fe6b8b 30%, #ff8e53 90%);
  border: 0;
  border-radius: 3px;
  box-shadow: 0 3px 5px 2px rgba(255, 105, 135, 0.3);
  color: white;
  height: 48px; */
  padding: 0 10px;
`;

export default Typography;
