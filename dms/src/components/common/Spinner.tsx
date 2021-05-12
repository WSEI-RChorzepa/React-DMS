import styled, { keyframes } from "styled-components";
import { Variables } from "styledHelpers";

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  height: 15px;
  width: 15px;
  border: 1px solid ${Variables.Color.primary};
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 16px auto;
  animation: ${rotation} 1s ease-in-out infinite;
`;

export default Spinner;
