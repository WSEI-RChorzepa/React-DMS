import React, { useContext, useState } from "react";
import toastr from "toastr";
import { Context } from "./Tasks/context";
import { Button, Flex } from "components";
import { useEntitiesContext } from "./context";
import { useLayoutContext } from "components/common/Layout/context";
import { BsThreeDots, BiSort, IoMdResize, FaShare, FaFilter } from "./Icons";

type Sort = "ASC" | "DESC";

const ActionsBar: React.VoidFunctionComponent = () => {
  const [sort, setSort] = useState<Sort>("DESC");
  const { collection, onUpdate } = useContext(Context);
  const { toogleFilterConditions } = useEntitiesContext();
  const { toggleShowNavigation } = useLayoutContext();

  const onSortClick = () => {
    if (sort === "ASC") {
      onUpdate && onUpdate(collection.sort((a, b) => a.id - b.id));
      setSort("DESC");
    } else {
      onUpdate && onUpdate(collection.sort((a, b) => b.id - a.id));
      setSort("ASC");
    }
  };

  const onFilterClick = () => toogleFilterConditions();

  const onResiceClick = () => toggleShowNavigation();

  const onShareClick = () => {
    navigator.clipboard.writeText(window.location.href);
    toastr.info("Page URL was successfully copied into the clipboard.", "Copy URL to the clipboard.");
  };

  return (
    <Flex direction="column" justifyContent="flex-start" alignItems="center">
      <Flex direction="row" justifyContent="flex-start" alignItems="center">
        <Button>
          <BsThreeDots />
        </Button>
        <Button onClick={onSortClick}>
          <BiSort /> Sort
        </Button>
        <Button onClick={onFilterClick}>
          <FaFilter /> Filter
        </Button>
        <Button onClick={onResiceClick}>
          <IoMdResize />
        </Button>
        <Button onClick={onShareClick}>
          <FaShare /> Share
        </Button>
      </Flex>
    </Flex>
  );
};

export default ActionsBar;
