import styled from "styled-components";

export const NavLink = styled.li`
  list-style: none;
  margin: 0px 4px;
  padding: 6px 16px;
  background-color: ${({ enable }) => enable && "#2e363d"};

  &:hover {
    background: #2e363d;
  }
`;
export const NavUL = styled.ul`
  padding: 0;
  margin: 20px 0px;
`;

export const NavContainer = styled.div`
  // display:block;
  // justify-content:space-around;
  // align-items:center;
  visibility: ${({ show }) => (show ? "unset" : "hidden")};
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  background: #1d2226;
  width: 66%;
  transform: ${({ show }) => (show ? "translateX(0)" : "translateX(100%)")};
  transition: all 0.3s;
  opacity: ${({ show }) => (show ? 1 : 0)};
`;
// #FFFFFF
// #008AF8
// #7b8994
export const Link = styled.a`
  color: ${({ enable }) => (enable ? "#ffffff" : "cyan")};
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin: 0 10px;
  background-color: transparent;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h4`
  color: white;
  font-size: 24px;
  margin: 0;
  font-weight: 700;
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #576264;
  position: sticky;
  top: 0;
  padding: 4px 0px;
  overflow: hidden;

  @media screen and (min-width: 500px) {
    ${NavContainer} {
      visibility: unset;
      background: none;
      position: unset;
      height: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      opacity: 1;
      transform: translateX(0);
    }
    ${NavUL} {
      display: flex;
      float: right;
      margin-top: auto;
      width: auto;
      margin: 0;
    }
    ${Link} {
      color: ${({ enable }) => enable && "white"};
      display: block;
      padding: 0.4em;
    }
  }

  //   @media screen and (max-width: 500px) {

  //     ${NavLink} {
  //       margin: 6px;
  //     }
  //     ${Link} {
  //       font-size: 14px;
  //     }

  //     ${Title} {
  //       font-size: 16px;
  //     }
  //     ${Logo} {
  //       height: 30px;
  //       width: 30px;
  //     }
  //   }
  //
`;
