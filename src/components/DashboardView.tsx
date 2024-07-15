import "../styles/Dashboard.css";
import DashboardCards from "./DashboardCards";
import NavBar from "./NavBar";

const DashboardView = () => {
  return (
    <div className="page-container">
      <NavBar />

      <div className="dashboard-content flex-center text-black">
        <DashboardCards />
      </div>
    </div>
  );
};

export default DashboardView;
