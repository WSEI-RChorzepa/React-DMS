import { VoidFunctionComponent } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Variables } from "styledHelpers";

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Title = styled.h4`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${Variables.Color.danger};
`;

const Message = styled.p`
  font-weight: 500;
  color: ${Variables.Color.danger};

  strong {
    color: ${Variables.Color.danger};
  }
`;

const Error404: VoidFunctionComponent = () => {
  const location = useLocation();

  return (
    <Wrapper>
      <div>
        <Title>Error 404: not found</Title>
        <Message>
          Page: <strong>{location.pathname}</strong> was not dound.
        </Message>
      </div>
    </Wrapper>
  );
};

export default Error404;
