import React, { useContext } from "react";
import { user } from "slices/userSlice";
import { DropdownContext } from "components/controls/Dropdown/context";
import { useAppSelector } from "hooks";
import { profile } from "./components";
import { Icon, Thumbnail, Link } from "components/common";

const { Wrapper, Account, Info, Links } = profile;

const Profile: React.VoidFunctionComponent = () => {
  const { onSelect } = useContext(DropdownContext);
  const { user: data, photo } = useAppSelector(user);

  return (
    <Wrapper>
      <Account>Account</Account>
      <Info>
        <Thumbnail src={photo?.thumbnailUrl} small />
        <div>
          {data?.name}
          <Link to="/profile" onClick={() => onSelect("Profile", "user-plus")}>
            See my profile
          </Link>
        </div>
      </Info>
      <Links>
        <Link to="/privacy" onClick={() => onSelect("Privacy", "privacy")}>
          <Icon type="privacy" /> <strong>Privacy</strong>
        </Link>
        <Link to="/settings" onClick={() => onSelect("Settings", "cog")}>
          <Icon type="cog" /> <strong>Privacy</strong>
        </Link>
      </Links>
    </Wrapper>
  );
};

export default Profile;
