import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import NewContract from "../pages/NewContract";

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/new-contract" element={<NewContract />} />
    </Routes>
  );
}

export default Routers;
