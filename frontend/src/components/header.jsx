import { useEffect, useState } from "react";
import {
  HeaderContainer,
  HeaderInnerContainer,
  HeaderLogo,
  Logo,
  HeaderLink,
  HeaderMenu,
  HeaderItems,
  SideBarBurger,
} from "../styles/components/headerElements";
import Logout from "./logout";

const Header = ({ isLoggedIn, toggleLoggedIn, toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const handleNavScroll = () => {
    if (window.scrollY >= 5) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleNavScroll);
    return () => {
      window.removeEventListener("scroll", handleNavScroll);
    };
  }, []);

  return (
    <HeaderContainer scrollnav={scrollNav ? 1 : 0}>
      <HeaderInnerContainer>
        <HeaderLogo>
          <HeaderLink scrollnav={scrollNav ? 1 : 0} to="/">
            <p>
              <Logo />
              Jacob Shakes
            </p>
          </HeaderLink>
        </HeaderLogo>
        <HeaderMenu>
          {isLoggedIn ? (
            <HeaderItems>
              <Logout toggleLoggedIn={toggleLoggedIn} />
            </HeaderItems>
          ) : (
            <>
              <HeaderItems>
                <HeaderLink scrollnav={scrollNav ? 1 : 0} to="/login">
                  <p>Login</p>
                </HeaderLink>
              </HeaderItems>
              <HeaderItems>
                <HeaderLink scrollnav={scrollNav ? 1 : 0} to="/register">
                  <p>Register</p>
                </HeaderLink>
              </HeaderItems>
            </>
          )}
        </HeaderMenu>
        <SideBarBurger scrollnav={scrollNav ? 1 : 0} onClick={toggle} />
      </HeaderInnerContainer>
    </HeaderContainer>
  );
};

export default Header;
