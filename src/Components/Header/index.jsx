import React from "react";
import {
  Container,
  NavLink,
  Link,
  NavContainer,
  Logo,
  LeftContainer,
  Title,
  NavUL,
} from "./styles/Header";

function Header({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Header.Title = function HeaderTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Header.NavLink = function HeaderLink({ children, ...props }) {
  return (
    
      <NavLink {...props}>
        <Link  {...props}>{children}</Link>
      </NavLink>
  );
};


Header.NavUL = function HeaderUL({children,...props}){
    return (
        <NavUL {...props}>{children}</NavUL>
    )
}

Header.NavContainer = function HeaderNavContainer({ children, ...props }) {
  return <NavContainer {...props}>{children}</NavContainer>;
};

Header.Logo = function HeaderLogo({ ...props }) {
  return <Logo {...props} />;
};

Header.LeftContainer = function HeaderLeftContainer({ children, ...props }) {
  return <LeftContainer {...props}>{children}</LeftContainer>;
};

export default Header;
