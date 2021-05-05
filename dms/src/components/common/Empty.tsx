import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledIcon = styled.img`
    width: 50px;
    height: 50px;
    opacity: 0.1;
`;

const Message = styled.p`
    margin-top: 1rem;
    font-weight: 500;
    text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
`;

const Empty: React.VoidFunctionComponent<{ message: string }> = ({ message }) => {
    const source = require(`assets/icons/box.svg`).default;

    return (
        <Wrapper>
            <div>
                <StyledIcon src={source} />
                <Message>{message}</Message>
            </div>
        </Wrapper>
    );
};

export default Empty;
