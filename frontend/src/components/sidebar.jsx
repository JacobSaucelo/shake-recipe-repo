import {
  SidebarContainer,
  SidebarLogo,
  Logo,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
  SidebarClose,
} from "../styles/components/sidebarElements";
import Logout from "./logout";

const Sidebar = ({ isOpen, isLoggedIn, toggle, toggleLoggedIn }) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarClose onClick={toggle} />
      <SidebarLogo>
        <SidebarLink to="/" onClick={toggle}>
          <Logo />
          <h3>Jacob Shakes</h3>
        </SidebarLink>
      </SidebarLogo>
      <SidebarMenu>
        {isLoggedIn ? (
          <SidebarItem>
            <Logout toggleLoggedIn={toggleLoggedIn} />
          </SidebarItem>
        ) : (
          <>
            <SidebarItem>
              <SidebarLink to="/login" onClick={toggle}>
                Login
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/register" onClick={toggle}>
                Register
              </SidebarLink>
            </SidebarItem>
          </>
        )}
      </SidebarMenu>
    </SidebarContainer>
  );
};

export default Sidebar;
