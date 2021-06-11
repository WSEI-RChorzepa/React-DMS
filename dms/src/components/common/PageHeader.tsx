import React from "react";
import styled from "styled-components";
import { Flex } from "components";

interface IProps {
  title: string;
  icon?: React.ReactNode;
}

const Wrapper = styled.div`
  margin-bottom: 1rem;
`;

const Heading = styled.h5`
  margin-bottom: 0;
  padding-right: 0.5rem;
`;

const PageHeader: React.VoidFunctionComponent<IProps> = ({ title, icon }) => (
  <Wrapper>
    <Flex direction="row" justifyContent="flex-start" alignItems="center">
      <Heading>{title}</Heading>
      {icon && icon}
    </Flex>
  </Wrapper>
);

export default PageHeader;
