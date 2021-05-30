import React from "react";
import { FiUser, FiHome } from "react-icons/fi";
import { ITaskWithUser } from "models";
import { TaskComponents as Styled } from "./components";

const Task: React.VoidFunctionComponent<ITaskWithUser> = (props) => (
  <Styled.CardGrid>
    <Styled.Image src={props.imageUrl} />
    <Styled.Tile>{props.title}</Styled.Tile>
    <Styled.Company>
      <div>
        <FiHome /> {props.company}
      </div>
      <div>
        <FiUser /> {props.owner}
      </div>
    </Styled.Company>
  </Styled.CardGrid>
);

export default Task;
