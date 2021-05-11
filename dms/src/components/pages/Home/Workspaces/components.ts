import styled, { css } from "styled-components";
import { Variables, Mixin } from "styledHelpers";

export const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

export namespace Slider {
  export const Container = styled.div<{ translateX: number }>`
    white-space: nowrap;
    transition: all 300ms ease;
    transform: translateX(${(props) => props.translateX}px);
  `;

  export const Button = styled.button<{ left?: boolean; right?: boolean }>`
    position: absolute;
    top: 35%;

    ${(props) =>
      props.left &&
      css`
        left: 1rem;
      `}
    ${(props) =>
      props.right &&
      css`
        right: 1rem;
      `}
  
    transform: translateY(-50%);
    font-weight: 800;
    font-size: 5rem;
    background-color: transparent;
    border: transparent;
    color: rgba(0, 0, 0, 0.5);
    font-size: 3rem;

    &:hover {
      cursor: pointer;
    }
  `;
}

export namespace Tile {
  export namespace Grid {
    export const Image = styled.div`
      grid-area: image;
    `;

    export const Icon = styled.div`
      grid-area: icon;
      position: relative;
      top: -1.5rem;
      left: 1rem;
    `;

    export const Label = styled.div`
      grid-area: label;
      padding: 0.5rem;
    `;

    export const Contract = styled.div`
      grid-area: contract;
      display: flex;
      flex-wrap: nowrap;
      margin-left: 1rem;
      > small {
        font-size: 11px;
        font-weight: 600;
        margin-left: 0.5rem;
        color: ${Variables.Color.secondary};
      }
    `;

    export const Users = styled.div`
      grid-area: users;
      display: flex;
      flex-wrap: nowrap;
      margin-left: 2rem;
      > small {
        font-size: 11px;
        font-weight: 600;
        margin-left: 0.5rem;
        color: ${Variables.Color.secondary};
      }
    `;

    export const Update = styled.div`
      grid-area: update;
      font-size: 11px;
      font-weight: 500;
      margin: 0.5rem 0.5rem 0.5rem 1rem;
      color: ${Variables.Color.secondary};
    `;
  }

  export const Container = styled.div`
    position: relative;
    width: 350px;
    margin: 0 1rem 0 0;
    display: inline-grid;
    grid-template-areas:
      "image image"
      "icon label"
      "contract users"
      "update update";
    grid-template-columns: 75px auto;
    grid-template-rows: auto 2.5rem auto auto;
    transition: all 200ms ease;
    border: 1px solid #fff;
    background-color: #fff;

    &:hover {
      cursor: pointer;
    }
  `;

  export const Image = styled.img`
    grid-area: image;
    height: 232px;
  `;

  export const IconCard = styled.div`
    background-color: #fff;
    border-radius: 2px;
    ${Mixin.border()};
    ${Mixin.boxShadow()};
    display: inline-block;
    padding: 1rem;
  `;
}
