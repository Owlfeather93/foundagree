import "../styles/NewContract.css";

const NewContractForm = () => {
  return (
    <form className="new-contract-form">
      <label htmlFor="contract-name">Contract name</label>
      <input
        type="text"
        id="contract-name"
        className="input-field"
        placeholder='e.g. "Software Development Contract"'
      />
      <div className="separator2rem" />

      <label htmlFor="contract-description">Contract description</label>
      <textarea
        id="contract-description"
        className="input-field"
        placeholder='e.g. "This contract is for the development of a new software application."'
      />
      <div className="separator2rem" />

      <label htmlFor="contract-signatory">Signatory (Eth Address)</label>
      <input
        type="text"
        id="contract-signatory"
        className="input-field"
        placeholder="e.g. 0x000000000000000"
      />
      <p>Press enter after each address to add them</p>
      <div className="added-addresses">
        <div className="added-address">0x000000000000000</div>
      </div>
      <div className="separator2rem" />

      <label htmlFor="start-date">Start date</label>
      <input id="start-date" className="input-field" type="date" />
      <div className="separator2rem" />

      <label htmlFor="end-date">End date</label>
      <input id="end-date" className="input-field" type="date" />
      <p>Leave empty if not applicable</p>
      <div className="separator2rem" />

      <label htmlFor="upoad-contract">Upload contract content</label>
      <input type="file" id="upload-contract" className="input-field" />
      <div className="separator2rem" />

      <div className="form-title">Shares and vesting (Optional)</div>
      <div className="flex-start w-full">
        <label htmlFor="shares">
          <div id="shares" className="added-address">
            0x000000000000000
          </div>
        </label>
        <input
          type="number"
          id="shares"
          className="input-field"
          placeholder="e.g. 1000"
        />
      </div>
      <div className="separator2rem" />

      <div className="form-title">Voting rights</div>
      <div className="flex-start w-full">
        <label htmlFor="shares">
          <div className="added-address">0x000000000000000</div>
        </label>
        <input
          type="number"
          id="shares"
          className="input-field"
          placeholder="e.g. 50"
          min={0}
          max={100}
        />
      </div>
      <div className="separator2rem" />

      <button className="main-button">Create Contract</button>
    </form>
  );
};

export default NewContractForm;
