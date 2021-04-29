import { FunctionComponent } from 'react';
import styled from 'styled-components';
import NavbarComponent from '../common/Navbar';

namespace Grid {
    export const Wrapper = styled.div`
        display: grid;
        grid-template-columns: 250px auto;
        grid-template-rows: 50px calc(100vh - 50px);
        grid-template-areas:
            'header header'
            'navigation main';
        width: 100%;
        position: relative;
    `;

    export const Navbar = styled(NavbarComponent)`
        grid-area: header;
        grid-row: 1;
    `;

    export const Navigation = styled.div`
        grid-area: navigation;
        grid-row: 2;
    `;

    export const Main = styled.div`
        grid-area: main;
        grid-row: 2;
    `;
}

const Layout: FunctionComponent<{ className?: string }> = ({ children, className }) => (
    <Grid.Wrapper className={className}>
        <Grid.Navbar />
        <Grid.Navigation>Navigation</Grid.Navigation>
        <Grid.Main>{children}</Grid.Main>
    </Grid.Wrapper>
);

export default Layout;
