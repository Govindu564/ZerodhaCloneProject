import React,{ useState} from "react";
import { Outlet } from "react-router-dom";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear authentication data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    localStorage.removeItem("userId");

    navigate("/auth"); // Redirect to login page after logout
  };
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Outlet /> {/* Child routes will render here */}
        <button
          onClick={handleLogout}
          style={{ position: "fixed", top: "27px", right: "25px" }}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
