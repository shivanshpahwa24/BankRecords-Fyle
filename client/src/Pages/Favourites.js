import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import MaterialTable from "material-table";
import { withRouter } from "react-router-dom";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const Favourites = ({ branches: { favourites }, history }) => {
  return (
    <div className="bank-branches">
      <div className="bank-branches-table shadow">
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
              field: "name",
              title: "Bank Name",
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
          data={favourites === null ? [] : favourites}
          title={
            <h4
              style={{
                fontSize: "1.3rem",
                marginTop: "1rem",
                color: "#343a40",
                fontWeight: "bold",
              }}
            >
              Favourites
            </h4>
          }
          options={{
            search: true,
            sorting: true,
            maxBodyHeight: 400,
          }}
          onRowClick={(event, rowData) => {
            history.push(`/banks/${rowData.bank_id}`);
            event.stopPropagation();
          }}
        />
      </div>
    </div>
  );
};

Favourites.propTypes = {
  branches: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({ branches: state.branches });

export default connect(mapStateToProps)(withRouter(Favourites));
