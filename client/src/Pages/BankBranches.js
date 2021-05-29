import React, { useState } from "react";
import BranchTable from "../components/BranchTable";

const BankBranches = () => {
  const [city, setCity] = useState("delhi");

  return (
    <div className="bank-branches">
      <select
        className="bank-branches-dropdown"
        onChange={(e) => setCity(e.target.value)}
        name="city"
        defaultValue="delhi"
      >
        <option className="dropdown-item" value="delhi">
          Delhi
        </option>

        <option className="dropdown-item" value="bangalore">
          Bangalore
        </option>

        <option className="dropdown-item" value="mumbai">
          Mumbai
        </option>
        <option className="dropdown-item" value="kolkata">
          Kolkata
        </option>
        <option className="dropdown-item" value="chennai">
          Chennai
        </option>
      </select>

      <BranchTable city={city} />
    </div>
  );
};

export default BankBranches;
