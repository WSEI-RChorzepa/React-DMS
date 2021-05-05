import React, { useContext, useRef, useEffect } from 'react';
import { DropdownContext } from './context';
import { useOutsideClick } from 'hooks';
import { Icon } from 'components';
import { Dropdown } from './infrastructure/abstracts';
import { StyledDropdown as Styled } from './infrastructure/styled';

const DropdownComponent: React.FunctionComponent<Dropdown.IProps> = ({ defaultValue, defultIcon, arrow, children }) => {
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

export default DropdownComponent;
