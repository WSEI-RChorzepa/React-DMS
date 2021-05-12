import React from "react";
import { BsChat } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { ICommentProps } from "./types";
import { Card, Dot } from "components";
import { comment } from "./components";

const { grid } = comment;

const Comment: React.VoidFunctionComponent<ICommentProps> = (props) => (
  <Card>
    <grid.Container>
      <grid.Header>{props.name}</grid.Header>
      <grid.Body>{props.body}</grid.Body>
      <grid.Footer>
        <ul>
          <li>
            <BsChat /> Subsid corp.
          </li>
          <li>
            <Dot />
          </li>
          <li>
            <FaRegEdit /> Client contract
          </li>
          <li>
            <Dot />
          </li>
          <li>
            updated 3 days ago by <strong> {props.owner}</strong>
          </li>
        </ul>
      </grid.Footer>
    </grid.Container>
  </Card>
);

export default Comment;
