import React from "react";
import { useAppSelector } from "hooks";
import { user } from "slices/userSlice";
import { Flex, PageHeader } from "components";
import { User } from "./Icons";
import MainCard from "./MainCard";
import DetailsCard from "./DetailsCard";

const Profile: React.VoidFunctionComponent = () => {
  const { status } = useAppSelector(user);

  return (
    <div>
      <PageHeader title="Profile" icon={<User />} />

      {status === "fulfilled" && (
        <Flex direction="column" justifyContent="flex-start" alignItems="flex-end">
          <MainCard />
          <DetailsCard />
        </Flex>
      )}
    </div>
  );
};

export default Profile;
