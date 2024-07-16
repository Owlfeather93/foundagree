import { useState } from "react";
import myContractsListData from "../mock/myContractsListData";
import Loader from "./Loader";

const MyContractsList = () => {
  const [loading, setLoading] = useState(false);

  return loading ? (
    <Loader />
  ) : (
    <div className="my-contracts-list">
      {myContractsListData.map((contract, index) => (
        <button
          onClick={() => console.log(contract)}
          key={index}
          className="my-contracts-list-item"
        >
          <div className="text-md text-slate-500">{contract.name}</div>
          <div className="text-md text-lime-800 font-bold">
            {contract.status}
          </div>
        </button>
      ))}
    </div>
  );
};

export default MyContractsList;
