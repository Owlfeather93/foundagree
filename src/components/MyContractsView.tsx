import NavBar from "./NavBar";
import MyContractsList from "./MyContractsList";
import "../styles/MyContracts.css";

const MyContractsView = () => {
  return (
    <div className="page-container">
      <NavBar />

      <div className="my-contracts-container">
        <h1 className="page-title text-primary-color">Contracts</h1>

        <MyContractsList />
      </div>
    </div>
  );
};

export default MyContractsView;
