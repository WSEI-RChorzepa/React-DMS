import React, { useContext, useRef, useEffect } from 'react';
import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { DropdownContext } from './context';
import { useOutsideClick } from 'hooks';
import { Mixin, Variables } from 'styledHelpers';
import { Icon } from 'components';
import { IconType } from 'types';

const contentMixin = (icon: boolean, arrow: boolean): FlattenSimpleInterpolation => {
    const areas = (): string => {
        const values: string[] = [];
        icon && values.push('icon');
        values.push('value');
        arrow && values.push('arrow');

        return values.join(', ').replaceAll(',', '');
    };

    return css`
        grid-template-columns: ${icon && '25px'} 1fr ${arrow && '25px'};
        grid-template-areas: '${areas()}';
    `;
};

namespace Styled {
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
        padding: 1rem 0.3rem;
        background-color: #fff;
        ${(props) => Mixin.open(props.open)};
        ${Mixin.transition};
        width: 100%;
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

interface IProps {
    defaultValue: string;
    defultIcon: IconType;
    arrow: boolean;
}

const Dropdown: React.FunctionComponent<IProps> = ({ defaultValue, defultIcon, arrow, children }) => {
    const ref = useRef(null);
    const { value, open, icon, setOpen, setValue, setIcon } = useContext(DropdownContext);

    useEffect(() => {
        setValue(defaultValue);
        defultIcon && setIcon(defultIcon);
    }, [defaultValue, defultIcon, setValue, setIcon]);

    useOutsideClick({ ref, callback: () => setOpen(false) });

    return (
        <Styled.Wrapper ref={ref}>
            <Styled.Button onClick={() => setOpen(!open)}>
                <Styled.ContentGrid icon={icon !== null} arrow={arrow !== null}>
                    {icon && (
                        <Styled.ContentIcon>
                            <Icon type={icon} />
                        </Styled.ContentIcon>
                    )}
                    <Styled.ContentValue>{value}</Styled.ContentValue>
                    {arrow && (
                        <Styled.ContentArrow>
                            <Icon type="arrow-down" size="small" />
                        </Styled.ContentArrow>
                    )}
                </Styled.ContentGrid>
            </Styled.Button>
            <Styled.DropdownMenu open={open}>{children}</Styled.DropdownMenu>
        </Styled.Wrapper>
    );
};

export default Dropdown;
