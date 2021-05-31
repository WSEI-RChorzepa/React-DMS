/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Context, Provider } from "./context";
import { ITaskWithUser } from "models";
import { Pagination, Button, Flex } from "components";
import { usePagination } from "hooks";
import { pagination } from "types";
import { TasksWrapperComponents as Styled } from "./components";
import { BsThreeDots } from "react-icons/bs";
import { BiSort } from "react-icons/bi";
import { IoMdResize } from "react-icons/io";
import { FaShare, FaFilter } from "react-icons/fa";
import { DisplayType } from "components/pages/Entities/types";
import Filter from "./Filter";
import Task from "./Task";
import FilterConditions from "./FilterConditions";

const Tasks: React.VoidFunctionComponent<{ display: DisplayType }> = ({ display }) => {
  const { collection, page, pages, pageSize, onPageChange } = useContext(Context);

  return (
    <div>
      {collection && (
        <>
          <Styled.Container display={display}>
            {collection.map((task) => (
              <Task key={task.id} {...task} />
            ))}
          </Styled.Container>
          <Pagination page={page} pages={pages} pageSize={pageSize} onPageChange={onPageChange} />
        </>
      )}
    </div>
  );
};

const Component: React.VoidFunctionComponent<{ tasks: ITaskWithUser[]; display: DisplayType }> = ({ tasks, display }) => {
  const pagination = usePagination({ elements: tasks });

  const value: pagination.IContextProps<ITaskWithUser> = {
    ...pagination,
    collection: pagination.currentElements,
    opUpdate: pagination.setElements,
  };

  useEffect(() => {
    pagination.setElements(tasks);
  }, []);

  return (
    <Provider configuration={value}>
      <Styled.Grid>
        <Styled.Grid.Configuration>
          <Flex direction="row" justifyContent="flex-start" alignItems="center">
            <Button>
              <BsThreeDots />
            </Button>
            <Button>
              <BiSort /> Sort
            </Button>
            <Button>
              <FaFilter /> Filter
            </Button>
            <Button>
              <IoMdResize />
            </Button>
            <Button>
              <FaShare /> Share
            </Button>
          </Flex>
        </Styled.Grid.Configuration>
        <Styled.Grid.Filter>
          <Filter elements={tasks} />
        </Styled.Grid.Filter>
      </Styled.Grid>
      <FilterConditions />
      <Tasks display={display} />
    </Provider>
  );
};

export default Component;
