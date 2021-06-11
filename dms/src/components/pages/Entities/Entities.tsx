/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon, Button, Flex, Spinner, Loader, PageHeader } from "components";
import { Header } from "./components";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchTasksAsync, tasks } from "slices/taskSlice";
import { DisplayType } from "./types";
import Tasks from "./Tasks/Tasks";
import { EntitiesContext } from "./context";
import { FaBars, BsGridFill } from "./Icons";

const Entities: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [display, setDisplay] = useState<DisplayType>("mosaic");
  const [showFilterConditions, setFilterConditions] = useState<boolean>(false);
  const { data, status } = useAppSelector(tasks);

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchTasksAsync());
    }
  }, []);

  return (
    <EntitiesContext.Provider
      value={{
        displayType: display,
        showFilterConditions: showFilterConditions,
        toogleFilterConditions: () => setFilterConditions(!showFilterConditions),
      }}
    >
      <Header>
        <PageHeader title="Entities" icon={<Icon type="cog" />} />
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Button onClick={() => setDisplay("mosaic")} selected={display === "mosaic"} size="lg">
            <BsGridFill /> Mosaic
          </Button>
          <Button onClick={() => setDisplay("rows")} selected={display === "rows"} size="lg">
            <FaBars />
          </Button>
        </Flex>
      </Header>
      {status === "pending" ? (
        <>
          <Loader>
            <div>
              <Spinner />
              <p>LOADING DATA</p>
              <p>please wait</p>
            </div>
          </Loader>
        </>
      ) : (
        <>
          <Tasks tasks={data} />
        </>
      )}
    </EntitiesContext.Provider>
  );
};

export default Entities;
