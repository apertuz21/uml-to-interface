import React, { useEffect, useState } from "react";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  BoldSpan,
  NavBtnLink,
} from "./styles";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            {/* <NavIcon src={logo} alt="catech_logo" /> */}
            <BoldSpan>Agora</BoldSpan>
          </NavLogo>
          <MobileIcon onClick={handleClick}>{click ? "X" : "O"}</MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/" onClick={closeMobileMenu}>
                Inicio
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about" onClick={closeMobileMenu}>
                Nosotros
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/services" onClick={closeMobileMenu}>
                Servicios
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
