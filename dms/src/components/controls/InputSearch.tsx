import React from "react";
import { Input, Icon } from "components";

export const InputSearch: React.VoidFunctionComponent<{ onChange: (value: string) => void }> = (props) => {
  let timeout: ReturnType<typeof setTimeout>;

  const handleFilter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      const { value } = e.target as HTMLInputElement;
      props.onChange(value);
    }, 1000);
  };

  return <Input onKeyDown={handleFilter} append={<Icon type="search" />} placeholder="Filter by title..." block />;
};
