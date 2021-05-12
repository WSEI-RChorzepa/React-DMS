import { VoidFunctionComponent } from "react";
import { Wrapper, Brand, Search, Badges } from "./components";
import DropdowonNavigation from "./Dropdown/DropdownNavigation";
import { Icon, Badge, Input, Logo } from "components";

const Navbar: VoidFunctionComponent<{ className?: string }> = ({ className }) => (
  <Wrapper className={className}>
    <Brand>
      <Logo />
      <DropdowonNavigation />
    </Brand>
    <Search>
      <Input block append={<Icon type="search" />} align="center" placeholder="Search" />
    </Search>
    <Badges>
      <ul>
        <li>
          <Icon type="house" size="large" />
        </li>
        <li>
          <Icon type="comments" shape="circle">
            <Badge>1</Badge>
          </Icon>
        </li>
        <li>
          <Icon type="bell" shape="circle">
            <Badge>9</Badge>
          </Icon>
        </li>
      </ul>
    </Badges>
  </Wrapper>
);

export default Navbar;
