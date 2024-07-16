import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NewContract from "../pages/NewContract";
import MyContracts from "../pages/MyContracts";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-contract" element={<NewContract />} />
      <Route path="/my-contracts" element={<MyContracts />} />
    </Routes>
  );
}

export default Routers;
