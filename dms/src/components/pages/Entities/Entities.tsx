/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Icon, Button, Flex, Spinner, Loader } from "components";
import { Header } from "./components";
import { useAppDispatch, useAppSelector } from "hooks";
import { fetchTasksAsync, tasks } from "slices/taskSlice";
import { BsGridFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { DisplayType } from "./types";
import Tasks from "./Tasks/Tasks";

const Entities: React.VoidFunctionComponent = () => {
  const dispatch = useAppDispatch();
  const [display, setDisplay] = useState<DisplayType>("mosaic");
  const { data, status } = useAppSelector(tasks);

  useEffect(() => {
    if (!data.length) {
      dispatch(fetchTasksAsync());
    }
  }, []);

  return (
    <div>
      <Header>
        <Flex direction="row" justifyContent="flex-start" alignItems="flex-start">
          <h5>Entities</h5>
          <Button>
            <Icon type="cog" />
          </Button>
        </Flex>
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
          <Tasks tasks={data} display={display} />
        </>
      )}
    </div>
  );
};

export default Entities;
