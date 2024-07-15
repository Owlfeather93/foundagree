import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Routers from "./routers";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routers />
    </BrowserRouter>
  );
}

export default App;
