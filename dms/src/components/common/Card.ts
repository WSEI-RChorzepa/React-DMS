import styled from "styled-components";
import { Mixin } from "styledHelpers";

const Card = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 2px;
  ${Mixin.boxShadow()};
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export default Card;
