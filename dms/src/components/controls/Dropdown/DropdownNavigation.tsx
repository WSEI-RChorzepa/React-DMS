import React, { useContext } from 'react';
import styled from 'styled-components';
import { DropdownContext, DropdownProvider } from './context';
import Dropdown from './Dropdown';
import { Icon, Input } from 'components';
import { IconType } from 'types';
import { Variables } from 'styledHelpers';

namespace Styled {
    export const Wrapper = styled.button`
        display: grid;
        grid-template-areas: 'prepend value';
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

    export const Filter = styled.div`
        margin-bottom: 1rem;
        width: 100%;
    `;
}

interface IDropdownOption {
    value: string;
    icon: IconType;
    prepend: React.ReactNode;
    onClick: (value: string, icon: IconType) => void;
}

type DropdownOptionType = {
    category: string;
    options: IDropdownOption[];
};

const RenderCategory: React.VoidFunctionComponent<{ category: string; options: IDropdownOption[] }> = ({ category, options }) => {
    return (
        <React.Fragment>
            <Styled.Category>{category}</Styled.Category>
            {options.map((option) => (
                <DropdownOption key={option.value} {...option} />
            ))}
        </React.Fragment>
    );
};

const DropdownOption: React.VoidFunctionComponent<IDropdownOption> = ({ value, icon, prepend, onClick }) => (
    <Styled.Wrapper onClick={() => onClick(value, icon)}>
        <Styled.Prepend>{prepend}</Styled.Prepend>
        <Styled.Value>{value}</Styled.Value>
    </Styled.Wrapper>
);

const DropdownNavigation: React.VoidFunctionComponent = () => {
    const { setValue, setIcon, setOpen } = useContext(DropdownContext);

    const handleChange = (value: string, icon: IconType) => {
        setValue(value);
        setIcon(icon);
        setOpen(false);
    };

    const options: DropdownOptionType[] = [
        {
            category: 'Platform',
            options: [
                {
                    value: 'Home',
                    icon: 'house',
                    prepend: <Icon type="house" />,
                    onClick: handleChange,
                },
                {
                    value: 'Publications',
                    icon: 'publications',
                    prepend: <Icon type="publications" />,
                    onClick: handleChange,
                },
                {
                    value: 'People',
                    icon: 'people',
                    prepend: <Icon type="people" />,
                    onClick: handleChange,
                },
                {
                    value: 'Entities',
                    icon: 'entities',
                    prepend: <Icon type="entities" />,
                    onClick: handleChange,
                },
                {
                    value: 'Administration',
                    icon: 'administration',
                    prepend: <Icon type="administration" />,
                    onClick: handleChange,
                },
            ],
        },
        {
            category: 'Workspace',
            options: [
                {
                    value: 'Client contract',
                    icon: 'publications',
                    prepend: <Icon type="publications" />,
                    onClick: handleChange,
                },
                {
                    value: 'Supplier contract',
                    icon: 'publications',
                    prepend: <Icon type="publications" />,
                    onClick: handleChange,
                },
                {
                    value: 'Corporate',
                    icon: 'entities2',
                    prepend: <Icon type="entities2" />,
                    onClick: handleChange,
                },
                {
                    value: 'Group Norms',
                    icon: 'ecosystem',
                    prepend: <Icon type="ecosystem" />,
                    onClick: handleChange,
                },
                {
                    value: 'Real estate contracts',
                    icon: 'ecosystem',
                    prepend: <Icon type="ecosystem" />,
                    onClick: handleChange,
                },
            ],
        },
    ];

    return (
        <Dropdown defaultValue="Home" defultIcon="house" arrow={true}>
            <Styled.Filter>
                <Input append={<Icon type="search" />} placeholder="Filter..." block />
            </Styled.Filter>
            {options && options.map((option) => <RenderCategory key={option.category} {...option} />)}
        </Dropdown>
    );
};

const Component: React.VoidFunctionComponent = () => (
    <DropdownProvider>
        <DropdownNavigation />
    </DropdownProvider>
);

export default Component;
