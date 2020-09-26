import React, { FC } from "react";
import { useStyles } from "./user-permissions.style.js";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { IUserPermissionsPage } from "./types";
import { UserPermissionsActions } from "./store/action";
import { IAppState } from "store/reducers";
import { DataTable, FilterBar, SectionHeader } from "components/shared";
import { useTableData } from "./table-data";
import { Grid } from "@material-ui/core";
import { useUser } from "hooks";
import moment from "moment";
import { links } from "routes/links";

const UserPermissions: FC<IUserPermissionsPage> = ({ userPermState, toggleFilter }) => {
  const lang = useTranslator();
  const classes = useStyles();
  const currentUser = useUser();

  const initialValues = {
    startDate: moment().startOf("month").format("YYYY-MM-DD hh:mm"),
    endDate: moment(new Date()).format("YYYY-MM-DD hh:mm"),
  };

  const onEdit = () => {};
  const onRemove = () => {};
  const onStatusChange = () => {};

  const handleFilterSend = (data: any) => {};

  return (
    <Grid container style={{ opacity: currentUser.pageLoading ? 0.5 : 1 }}>
      <SectionHeader title={lang.users} />
      <FilterBar
        initialValues={initialValues}
        onClear={() => toggleFilter({ ...userPermState.filter, isFiltered: false, form: {} as any })}
        onSend={(data) => handleFilterSend(data)}
        formName="user-permissions/filter"
        config={{ formatDate: false, showFilterButton: false, showTitleButton: true }}
        titleButtonText={`+ ${lang.addNewPermission}`}
        titleButtonLink={links.UserPermissions.add}
      />
      <Grid item xs={12} className={classes.tableContainer}>
        <DataTable
          options={{ toolbar: false }}
          columns={useTableData(onEdit, onRemove, onStatusChange)}
          data={userPermState.users}
        />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ userPermState: state.userPermissions });
export default connect(mapStateToProps, UserPermissionsActions)(UserPermissions);
