import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';

const Header = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink href="/" active>Home</NavLink>
        </NavItem>
        <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle nav caret>
            Register/Login
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem href="/register/">Register</DropdownItem>
            <DropdownItem divider />
            <DropdownItem href="/login/">Login</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavItem>
          <NavLink href="/addplant/">Add A Plant</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myplants/">View My Plants</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/deleteplant/">Delete a Plant</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/editplant/">Edit a Plant</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/updatephonepass/">Edit Phone Number/Password</NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;