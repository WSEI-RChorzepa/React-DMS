import { FunctionComponent } from 'react';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
    display: grid;
    grid-template-columns: 250px auto;
    grid-template-rows: 50px calc(100vh - 50px);
    grid-template-areas:
        'header header'
        'navigation main';
    width: 100%;
    position: relative;
`;

const HeaderWrapper = styled.div`
    grid-area: header;
    grid-row: 1;
`;

const NavigationWrapper = styled.div`
    grid-area: navigation;
    grid-row: 2;
`;

const MainWrapper = styled.main`
    grid-area: main;
    grid-row: 2;
`;

const Layout: FunctionComponent = ({ children }) => (
    <LayoutWrapper>
        <HeaderWrapper>Header</HeaderWrapper>
        <NavigationWrapper>Navigation</NavigationWrapper>
        <MainWrapper>{children}</MainWrapper>
    </LayoutWrapper>
);

export default Layout;
