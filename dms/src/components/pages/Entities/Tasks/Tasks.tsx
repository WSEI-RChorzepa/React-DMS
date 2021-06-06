/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { Context, Provider } from "./context";
import { ITaskWithUser } from "models";
import { Pagination } from "components";
import { TasksWrapperComponents as Styled } from "./components";
import { usePagination } from "hooks";
import { pagination } from "types";
import Filter from "../Filter";
import Task from "./Task";
import ActionsBar from "../ActionsBar";
import FilterConditions from "../FilterConditions";
import { useEntitiesContext } from "../context";

const Tasks: React.VoidFunctionComponent = () => {
  const { collection, page, pages, pageSize, onPageChange } = useContext(Context);
  const { displayType } = useEntitiesContext();

  return (
    <div>
      {collection && (
        <>
          <Styled.Container display={displayType}>
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

const Component: React.VoidFunctionComponent<{ tasks: ITaskWithUser[] }> = ({ tasks }) => {
  const pagination = usePagination({ elements: tasks });

  const value: pagination.IContextProps<ITaskWithUser> = {
    ...pagination,
    collection: pagination.currentElements,
    onUpdate: pagination.setElements,
  };

  useEffect(() => {
    pagination.setElements(tasks);
  }, []);

  return (
    <Provider configuration={value}>
      <Styled.Grid>
        <Styled.Grid.Configuration>
          <ActionsBar />
        </Styled.Grid.Configuration>
        <Styled.Grid.Filter>
          <Filter elements={tasks} />
        </Styled.Grid.Filter>
      </Styled.Grid>
      <FilterConditions />
      <Tasks />
    </Provider>
  );
};

export default Component;
