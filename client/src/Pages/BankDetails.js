import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const BankDetails = ({ branches: { branches }, match }) => {
  const [bank, setBank] = useState({});
  useEffect(() => {
    branches.forEach((branch) => {
      if (branch.bank_id === match.params.bankId) {
        setBank(branch);
      }
    });
  }, [branches, match.params.bankId]);

  return (
    <div className="details">
      <div className="details-container">
        <header className="details-header">
          <h3>{bank.name}</h3>
        </header>
        <div className="details-main"></div>
      </div>
    </div>
  );
};

BankDetails.propTypes = {
  branches: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ branches: state.branches });

export default connect(mapStateToProps)(BankDetails);
