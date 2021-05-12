import React, { useContext } from "react";
import Comment from "./Comment";
import { header } from "./components";
import { Pagination } from "components";
import Dropdown from "./Dropdown";
import Search from "./Search";
import { ResumeProvider, ResumeContext } from "./context";

const Resume: React.VoidFunctionComponent = () => {
  const { comments, pagination } = useContext(ResumeContext);

  return (
    <div>
      <header.Container>
        <header.Title>Resume your work</header.Title>
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

const Component: React.VoidFunctionComponent = () => (
  <ResumeProvider>
    <Resume />
  </ResumeProvider>
);

export default Component;
