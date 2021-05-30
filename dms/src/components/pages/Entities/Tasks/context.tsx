import { createContext } from "react";
import { ITaskWithUser } from "models";
import { pagination } from "types";
import { DefaultPaginationProps } from "hooks/usePagination";

export const Context = createContext(DefaultPaginationProps<ITaskWithUser>());

export const Provider: React.FunctionComponent<{ configuration: pagination.IContextProps<ITaskWithUser> }> = ({
  configuration: pagination,
  children,
}) => <Context.Provider value={pagination}>{children}</Context.Provider>;
