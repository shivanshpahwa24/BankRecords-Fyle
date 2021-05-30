import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
        <div className="details-main">
          <div>
            <div className="details-field">IFSC</div>
            <div className="details-state"> : {bank.ifsc}</div>
          </div>
          <div>
            <div className="details-field">BANK ID</div>
            <div className="details-state"> : {bank.bank_id}</div>
          </div>
          <div>
            <div className="details-field">BRANCH</div>
            <div className="details-state"> : {bank.branch}</div>
          </div>

          <div>
            <div className="details-field">ADDRESS</div>
            <div className="details-state"> : {bank.address}</div>
          </div>
          <div>
            <div className="details-field">CITY</div>
            <div className="details-state"> : {bank.city}</div>
          </div>
          <div>
            <div className="details-field">DISTRICT</div>
            <div className="details-state"> : {bank.district}</div>
          </div>
          <div>
            <div className="details-field">STATE</div>
            <div className="details-state"> : {bank.state}</div>
          </div>
          <Link to="/" className="btn1">
            Back to list of branches
          </Link>
        </div>
      </div>
    </div>
  );
};

BankDetails.propTypes = {
  branches: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ branches: state.branches });

export default connect(mapStateToProps)(BankDetails);
