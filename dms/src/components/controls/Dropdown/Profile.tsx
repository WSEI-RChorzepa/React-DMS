import React, { useContext } from "react";
import styled from "styled-components";
import { user } from "slices/userSlice";
import { DropdownContext } from "./context";
import { useAppSelector } from "hooks";
import { Variables } from "styledHelpers";
import { Icon, Thumbnail, Link } from "components/common";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  border-top: 1px solid ${Variables.Color.border};
  padding: 0.7rem;
`;

const Account = styled.strong`
  display: block;
  margin-bottom: 0.5rem;
`;

const Info = styled.div`
  display: grid;
  grid-template-areas: "thumbnail data";
  grid-template-columns: 40px auto;

  > img {
    grid-area: thumbnail;
  }

  > div {
    grid-area: data;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    > a {
      margin-top: 0.2rem;
    }
  }
`;

const Links = styled.div`
  margin-top: 1rem;
  > a {
    margin-bottom: 0.5rem;
  }
`;

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
