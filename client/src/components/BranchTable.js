import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getBranches } from "../actions/branches";
import MaterialTable from "material-table";
import { forwardRef } from "react";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Search from "@material-ui/icons/Search";

const tableIcons = {
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const BranchTable = ({ getBranches, branches: { branches }, city }) => {
  useEffect(() => {
    getBranches(city);
  }, [getBranches, city]);

  return (
    <div className="bank-branches-table">
      <MaterialTable
        icons={tableIcons}
        columns={[
          {
            field: "ifsc",
            title: "IFSC",
            cellStyle: {
              color: "#575757",
            },
            headerStyle: {
              fontSize: "1.1rem",
              fontWeight: "bold",
            },
          },
          {
            field: "bank_id",
            title: "Bank ID",
            cellStyle: {
              color: "#575757",
            },
            headerStyle: {
              fontSize: "1.1rem",
              fontWeight: "bold",
            },
          },
          {
            field: "branch",
            title: "Branch",
            cellStyle: {
              color: "#575757",
            },
            headerStyle: {
              fontSize: "1.1rem",
              fontWeight: "bold",
            },
          },
          {
            field: "address",
            title: "Address",
            cellStyle: {
              color: "#575757",
            },
            headerStyle: {
              fontSize: "1.1rem",
              fontWeight: "bold",
            },
          },
          {
            field: "city",
            title: "City",
            cellStyle: {
              color: "#575757",
            },
            headerStyle: {
              fontSize: "1.1rem",
              fontWeight: "bold",
            },
          },
          {
            field: "district",
            title: "District",
            cellStyle: {
              color: "#575757",
            },
            headerStyle: {
              fontSize: "1.1rem",
              fontWeight: "bold",
            },
          },
          {
            field: "state",
            title: "State",
            cellStyle: {
              color: "#575757",
            },
            headerStyle: {
              fontSize: "1.1rem",
              fontWeight: "bold",
            },
          },
        ]}
        data={branches}
        title={
          <h4
            style={{
              fontSize: "1.3rem",
              marginTop: "1rem",
              color: "#343a40",
              fontWeight: "bold",
            }}
          >
            Leaderboard
          </h4>
        }
        options={{
          search: true,
          sorting: true,
          paging: false,
          maxBodyHeight: 400,
        }}
      />
    </div>
  );
};

BranchTable.propTypes = {
  getBranches: PropTypes.func.isRequired,
  branches: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ branches: state.branches });

export default connect(mapStateToProps, { getBranches })(BranchTable);
