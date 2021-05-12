import { FunctionComponent } from "react";
import styled from "styled-components";
import * as Mixin from "styledHelpers/mixins";
import { SizeType, IconType, ShapeType } from "types";

interface IconProps {
  type: IconType;
  size?: SizeType;
  shape?: ShapeType;
}

const SvgIcon = styled.img<{ size: SizeType; stacked?: boolean }>`
  position: relative;
  ${(props) => Mixin.ImgSize(props.size)};
`;

const Shape = styled.div<{ type?: ShapeType }>`
  position: relative;
  ${(props) => props.type === "circle" && Mixin.ShapeCircle()};
  ${(props) => props.type === "rectangle" && Mixin.ShapeRectangle()};
`;

const Icon: FunctionComponent<IconProps> = (props) => {
  const source = require(`assets/icons/${props.type}.svg`).default;

  return (
    <Shape type={props.shape}>
      <SvgIcon src={source} size={props.size ? props.size : "medium"} />
      {props.children}
    </Shape>
  );
};

export default Icon;
