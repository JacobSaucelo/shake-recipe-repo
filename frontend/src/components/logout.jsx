import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LogoutBtn } from "../styles/components/logoutElements";

const Logout = ({ toggleLoggedIn }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    axios
      .get("/api/v1/user/logout", {
        withCredentials: true,
      })
      .then((data) => {
        toggleLoggedIn();
        navigate("/");
      })
      .catch((err) => console.log(err.response.message));
  };

  return <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>;
};

export default Logout;
