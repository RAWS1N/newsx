import React, { useState } from "react";
import { Header, OpenButton, CloseButton } from "../Components";

function HeaderContainer({ ...props }) {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState("home");

  function toggle() {
    setShow((prevState) => !prevState);
  }

  function HideNav(id) {
    setShow(false);
    setActive(id);
  }
  // const styles = {
  //   color: "#008AF8",
  //   fontWeight: "bold",
  // };

  return (
    <Header {...props}>
      <Header.LeftContainer>
        <Header.Logo src="./Images/news.png" alt="News" />
        <Header.Title>NewsX</Header.Title>
      </Header.LeftContainer>
      <OpenButton onClick={toggle} />
      <Header.NavContainer show={show}>
        <CloseButton onClick={toggle} />
        <Header.NavUL>
          {/* <Header.NavLink href="#" onClick={() => HideNav("home")} enable={active === "home"}>
            Home
          </Header.NavLink> */}
          <Header.NavLink
            href="#"
            onClick={() => HideNav("about")}
            enable={active === "about"}
          >
            About
          </Header.NavLink>
          <Header.NavLink
            href="#"
            onClick={() => HideNav("services")}
            enable={active === "services"}
          >
            Services
          </Header.NavLink>
          <Header.NavLink
            href="#"
            onClick={() => HideNav("faqs")}
            enable={active === "faqs"}
          >
            FAQs
          </Header.NavLink>
          <Header.NavLink
            href="#"
            onClick={() => HideNav("contact")}
            enable={active === "contact"}
          >
            Contact
          </Header.NavLink>
        </Header.NavUL>
      </Header.NavContainer>
    </Header>
  );
}

export default HeaderContainer;
