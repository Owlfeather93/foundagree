import { GrDocumentLocked } from "react-icons/gr";
import Spinner from "react-bootstrap/Spinner";
import "../styles/Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="font-bold navbar-logo flex-center">
        <GrDocumentLocked size={25} className="mr-4" />
        Found<span className="navbar-logo-secondary">Agree</span>
      </div>

      <Spinner animation="border" className="mt-12" />
    </div>
  );
};

export default Loader;
