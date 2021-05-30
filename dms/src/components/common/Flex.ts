import styled from "styled-components";

interface IFlexProps {
  direction: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end";
  alignItems: "flex-start" | "flex-end" | "center" | "center" | "stretch" | "baseline";
  wrap?: null;
}

const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${(props) => props.direction};

  &[wrap] {
    flex-wrap: wrap;
  }

  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
`;

export default Flex;
