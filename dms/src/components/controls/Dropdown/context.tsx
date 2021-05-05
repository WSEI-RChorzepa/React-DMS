import React, { useState, createContext } from 'react';
import { IconType } from 'types';

interface IDropdownContext {
    value: string;
    icon: IconType | null;
    open: boolean;
    setValue: (value: string) => void;
    setIcon: (type: IconType) => void;
    setOpen: (value: boolean) => void;
    onSelect: (value: string, icon: IconType) => void;
}

const defaultContext: IDropdownContext = {
    value: '',
    icon: null,
    open: false,
    setValue: (value: string) => {},
    setIcon: (type: IconType) => {},
    setOpen: (value: boolean) => {},
    onSelect: (value: string, icon: IconType) => {},
};

const DropdownContext = createContext<IDropdownContext>(defaultContext);

const DropdownProvider: React.FunctionComponent = ({ children }) => {
    const [value, setValue] = useState<string>(defaultContext.value);
    const [icon, setIcon] = useState<IconType | null>(defaultContext.icon);
    const [open, setOpen] = useState<boolean>(defaultContext.open);

    const onSelect = (value: string, icon: IconType) => {
        setValue(value);
        setIcon(icon);
        setOpen(false);
    };

    const contextValue: IDropdownContext = {
        value,
        icon,
        open,
        setValue,
        setIcon,
        setOpen,
        onSelect,
    };

    return <DropdownContext.Provider value={contextValue}>{children}</DropdownContext.Provider>;
};

export { DropdownContext, DropdownProvider };
