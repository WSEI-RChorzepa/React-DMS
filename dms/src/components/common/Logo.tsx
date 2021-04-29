import { VoidFunctionComponent } from 'react';
import styled from 'styled-components';
import LogoImage from 'assets/images/logo.png';

const Image = styled.img`
    height: 40px;
    width: 40px;
    margin-right: 2rem;
`;

const Logo: VoidFunctionComponent = () => <Image src={LogoImage} />;

export default Logo;
