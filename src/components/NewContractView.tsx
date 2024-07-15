import NavBar from "./NavBar";
import "../styles/NewContract.css";
import NewContractForm from "./NewContractForm";

const NewContractView = () => {
  return (
    <div className="page-container">
      <NavBar />

      <div className="new-contract-container">
        <h1 className="new-contract-header text-primary-color">New Contract</h1>

        <NewContractForm />
      </div>
    </div>
  );
};

export default NewContractView;
