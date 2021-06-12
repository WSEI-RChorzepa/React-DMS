/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef } from "react";
import styled, { css } from "styled-components";
import { useOutsideClick } from "hooks";
import { Variables, Mixin } from "styledHelpers";
import { Badge as BadgeComponent } from "components/common";

export const Badge = styled(BadgeComponent)<{ readonly?: boolean }>`
  position: relative;
  display: inline-block;
  font-size: 12px;
  margin-right: 0.2rem;
  padding: 0.2rem 0.5rem;
  border-radius: 2px;
  height: auto;
  top: 0;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.readonly &&
    css`
      background-color: ${Variables.Color.border};
      color: ${Variables.Color.defaultFontColor};
      font-weight: 500;

      &:hover {
        cursor: default;
      }
    `}
`;

const Wrapper = styled.div`
  position: relative;
  margin: 0.5rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto;

  > div:nth-child(1) {
    grid-row: 1;
  }
  > div:nth-child(2) {
    grid-row: 2;
    position: relative;
  }
`;

const Field = styled.div`
  position: relative;
  ${Mixin.border()};
  height: ${Variables.Global.inputHeight};
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  span:first-child {
    margin-left: 3px;
  }
`;

const Option = styled.li<{ selected: boolean }>`
  ${(props) =>
    props.selected &&
    css`
      background-color: ${Variables.Color.selected};
    `}
`;

const Menu = styled.div<{ open: boolean }>`
  position: absolute;
  left: 0;
  top: 1px;
  background-color: #fff;
  width: 100%;
  z-index: 9999;
  ${(props) => Mixin.open(props.open)};
  ${Mixin.transition};
  box-shadow: 2px 2px 5px ${Variables.Color.boxShadow};
  border: 1px solid ${Variables.Color.border};

  ul {
    li {
      padding: 0.4rem 0.2rem;
      margin: 1px;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

interface IProps {
  values: string[];
  dictionary: string[];
  push: (obj: any) => void;
  remove<T>(index: number): T | undefined;
}

export const TagBox: React.VoidFunctionComponent<IProps> = ({ values, dictionary, push, remove }) => {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useOutsideClick({ ref, callback: () => setOpen(false) });

  const onSelect = (value: string) => {
    if (values.includes(value)) {
      handleRemove(value);
    } else {
      push(value);
      setOpen(false);
    }
  };

  const handleRemove = (value: string) => {
    const index = values.indexOf(value);
    remove(index);
    setOpen(false);
  };

  return (
    <Wrapper ref={ref}>
      <Field onClick={() => setOpen(true)}>
        {values.map((value) => (
          <Badge key={value} onClick={() => handleRemove(value)}>
            {value}
          </Badge>
        ))}
      </Field>
      <div>
        <Menu open={open}>
          <ul>
            {dictionary.map((value) => (
              <Option key={value} onClick={() => onSelect(value)} selected={values.includes(value)}>
                {value}
              </Option>
            ))}
          </ul>
        </Menu>
      </div>
    </Wrapper>
  );
};
