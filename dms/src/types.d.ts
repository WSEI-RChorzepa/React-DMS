export type Dictionary<T> = {
    [key: string]: T;
};

export type SizeType = 'small' | 'medium' | 'large';

export type IconType =
    | 'administration'
    | 'arrow-down'
    | 'bell'
    | 'cog'
    | 'comments'
    | 'ecosystem'
    | 'entities'
    | 'entities2'
    | 'house'
    | 'logout'
    | 'network'
    | 'people'
    | 'plus'
    | 'privacy'
    | 'publications'
    | 'search'
    | 'settings'
    | 'user-plus';

export type VerticalType = 'top' | 'bottom' | 'center';

export type HorizontalType = 'left' | 'right' | 'center';

export type ShapeType = 'circle';
