import { IconType } from 'types';

export namespace Dropdown {
    export interface IProps {
        defaultValue: string;
        defultIcon: IconType;
        arrow: boolean;
    }
}

export namespace DropdownNavigation {
    export interface IOption {
        category: string;
        options: IOptionProps[];
    }

    export interface IOptionProps {
        value: string;
        icon: IconType;
        route: string;
        prepend: React.ReactNode;
    }

    export interface IProps {
        options: IOption[];
    }

    export interface ICategoryProps {
        category: string;
        options: IOptionProps[];
    }
}
