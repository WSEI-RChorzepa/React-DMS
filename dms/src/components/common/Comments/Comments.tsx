import React, { useContext } from "react";
import Comment from "./Comment";
import { header } from "./components";
import { Pagination } from "components";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { CommentsProvider, CommentsContext } from "./context";

const Resume: React.VoidFunctionComponent<{ title: string }> = ({ title }) => {
  const { comments, pagination } = useContext(CommentsContext);

  return (
    <div>
      <header.Container>
        <header.Title>{title}</header.Title>
        <header.Navigation>
          <Search />
          <Dropdown />
        </header.Navigation>
      </header.Container>

      {comments.length ? (
        <>
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
          <Pagination {...pagination} />
        </>
      ) : null}
    </div>
  );
};

const Component: React.VoidFunctionComponent<{ title: string }> = (props) => (
  <CommentsProvider>
    <Resume {...props} />
  </CommentsProvider>
);

export default Component;
