import React, { useContext } from "react";
import { Icon, Input } from "components";
import { CommentsContext } from "./context";

const Search: React.VoidFunctionComponent = () => {
  const { filterByTitle } = useContext(CommentsContext);

  let timeout: ReturnType<typeof setTimeout>;

  const handleFilter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const { value } = e.target as HTMLInputElement;
      filterByTitle(value);
    }, 1000);
  };

  return <Input onKeyDown={handleFilter} append={<Icon type="search" />} placeholder="Filter by title..." />;
};

export default Search;
