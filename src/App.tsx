import './App.css'
import { BrowserRouter } from "react-router-dom";
import Routers from './routers';

function App() {
  return (
    <BrowserRouter basename="/app">
      <Routers/>
    </BrowserRouter>
  );
}

export default App;
