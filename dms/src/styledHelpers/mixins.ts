import { css, FlattenSimpleInterpolation } from 'styled-components';
import { Dictionary, SizeType } from 'types';
import * as Variables from './variables';

export const boxShadow = () =>
    css`
        box-shadow: 1px 1px 5px ${Variables.Color.boxShadow};
    `;

export const border = () =>
    css`
        border: 1px solid ${Variables.Color.border};
    `;

export const verticalPosition = (vertical: string) => {
    const aligments: Dictionary<FlattenSimpleInterpolation> = {
        top: css`
            top: 5px;
        `,
        bottom: css`
            bottom: 5px;
        `,
        center: css`
            top: 50%;
            transform: translateY(-50%);
        `,
    };

    return aligments[vertical];
};

export const horizontalPosition = (horizontal: string) => {
    const aligments: Dictionary<FlattenSimpleInterpolation> = {
        left: css`
            left: 10px;
        `,
        right: css`
            right: 10px;
        `,
        center: css`
            left: 50%;
            transform: translateX(-50%);
        `,
    };

    return aligments[horizontal];
};

export const fontFamily = (color?: string, size?: string) => css`
    font-family: 'Montserrat';
    font-weight: 400;
    font-size: ${size !== undefined ? size : Variables.Font.size[12]};
    color: ${color ? color : Variables.Color.defaultFontColor};
`;

export const block = (block?: boolean) =>
    block &&
    css`
        width: 100%;
    `;

export const ImgSize = (size: SizeType) => {
    const sizes: Dictionary<FlattenSimpleInterpolation> = {
        small: css`
            width: 13px;
            height: 13px;
        `,
        medium: css`
            width: 16px;
            height: 16px;
        `,
        large: css`
            width: 22px;
            height: 22px;
        `,
    };

    return sizes[size];
};

export const ShapeCircle = () => css`
    background-color: ${Variables.Color.secondary};
    border-radius: 50%;
    padding: 5px 6px;
`;

export const open = (open: boolean) => css`
    transform: ${open ? 'scaleY(1)' : 'scaleY(0)'};
    opacity: ${open ? '1' : '0'};
    transform-origin: left top;
`;

export const transition = () =>
    css`
        transition: all 300ms ease-in-out;
    `;
