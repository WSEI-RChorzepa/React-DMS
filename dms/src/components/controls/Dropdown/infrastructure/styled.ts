import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Mixin, Variables } from "styledHelpers";

const contentMixin = (icon: boolean, arrow: boolean): FlattenSimpleInterpolation => {
  const areas = (): string => {
    const values: string[] = [];
    icon && values.push("icon");
    values.push("value");
    arrow && values.push("arrow");

    return values.join(", ").replaceAll(",", "");
  };

  return css`
    grid-template-columns: ${icon && "25px"} 1fr ${arrow && "25px"};
    grid-template-areas: "${areas()}";
  `;
};

export namespace StyledDropdown {
  export const Wrapper = styled.div`
    position: relative;
  `;

  export const Button = styled.button`
    ${Mixin.fontFamily(Variables.Color.defaultFontColor)}
    background-color: transparent;
    border: none;
    height: 35px;
    min-width: 200px;
    text-align: left;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;

    img {
      opacity: 0.6;
      transition: all 300ms ease;
    }

    &:hover {
      cursor: pointer;

      img {
        opacity: 0.6;
      }
    }

    &:active {
      outline: none;
    }
  `;

  export const DropdownMenu = styled.div<{ open: boolean }>`
    position: absolute;
    left: 0;
    background-color: #fff;
    width: 100%;
    z-index: 9;
    ${(props) => Mixin.open(props.open)};
    ${Mixin.transition};
    box-shadow: 2px 2px 5px ${Variables.Color.boxShadow};
    border: 1px solid ${Variables.Color.border};
  `;

  export const ContentGrid = styled.div<{ icon: boolean; arrow: boolean }>`
    width: 100%;
    display: grid;
    ${(props) => contentMixin(props.icon, props.arrow)}
  `;

  export const ContentIcon = styled.div`
    grid-area: icon;
  `;
  export const ContentValue = styled.div`
    grid-area: value;
  `;
  export const ContentArrow = styled.div`
    grid-area: arrow;
  `;
}

export namespace StyledDropdownNavigation {
  export const Wrapper = styled.button`
    display: grid;
    grid-template-areas: "prepend value";
    grid-template-rows: auto;
    grid-template-columns: 25px 1fr;
    align-items: center;
    margin-bottom: 5px;
    width: 100%;
    background: transparent;
    border: none;
    font-weight: 600;

    &:hover {
      cursor: pointer;
    }
  `;

  export const Prepend = styled.div`
    grid-area: prepend;
  `;

  export const Value = styled.div`
    grid-area: value;
    text-align: left;
  `;

  export const Category = styled.span`
    display: block;
    font-weight: 600;
    color: ${Variables.Color.secondary};
    margin: 0.5rem 0.3rem;
  `;

  export const Options = styled.div`
    padding: 0.5rem 0.3rem;
  `;

  export const Filter = styled.div`
    padding: 1rem 0.3rem 0;
    width: 100%;
  `;
}
