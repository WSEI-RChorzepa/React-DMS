import styled from 'styled-components';
import { Color, Font } from 'styledHelpers/variables';
import { fontFamily } from 'styledHelpers/mixins';

const Badge = styled.span`
    ${fontFamily('#FFF', Font.size[10])};
    position: absolute;
    top: -5px;
    right: -2px;
    content: '';
    color: #fff;
    background-color: ${Color.primary};
    border-radius: 5px;
    height: 12px;
    min-width: 15px;
    padding: 0 2px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Badge;
