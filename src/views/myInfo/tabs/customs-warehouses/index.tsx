import { DataTable } from "components/shared/data-table";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { ICustomsWarehousesInfo } from "../../types";
import { MyinfoActions } from "views/myInfo/store/action";
import { useStyles } from "./customs-warehouses.style";
import { Select, MenuItem } from "@material-ui/core";
import { useTableData } from "./table-date";
import { useTranslator } from "localization";
import { useUser } from "hooks";
import { AlertPage } from "components/shared";
import { faInfoCircle } from "@fortawesome/pro-duotone-svg-icons";

export interface ICustomsWarehousesPage {
  getWarehouses(status: number): void;
  wareHouses: ICustomsWarehousesInfo[];
  loading: boolean;
}

const CustomsWarehouses: FC<ICustomsWarehousesPage> = ({ getWarehouses, wareHouses, loading }) => {
  const lang = useTranslator("myInfo", ["alerts"]);
  const classes = useStyles();
  const { WarehouseDataColumns, modifyData } = useTableData();
  const [filter, setFilter] = useState<number>(3);
  const currentUser = useUser();

  useEffect(() => {
    if (currentUser.voen) {
      getWarehouses(3);
    }
  }, [getWarehouses, currentUser.localToken, currentUser.voen]);

  const handleChange = (e: any) => {
    getWarehouses(e.target.value);
    setFilter(e.target.value);
  };

  const renderTitle = () => {
    return (
      <div>
        <h6> {lang.customsWarehouses} </h6>
        <Select value={filter} onChange={(e) => handleChange(e)} className={classes.tableSelect}>
          <MenuItem value={2}>{lang.all}</MenuItem>
          <MenuItem value={3}>{lang.allowed}</MenuItem>
          <MenuItem value={1}>{lang.denied}</MenuItem>
        </Select>
      </div>
    );
  };

  return currentUser.voen ? (
    <div className={classes.container}>
      <DataTable
        columns={WarehouseDataColumns}
        data={modifyData(wareHouses)}
        stripped
        isLoading={loading}
        options={{
          search: false,
          showTitle: true,
        }}
        title={renderTitle()}
      />
    </div>
  ) : (
    <AlertPage
      icon={faInfoCircle}
      classes={{ icon: classes.alertIcon, root: classes.alertContainer }}
      color="primary"
      title={lang.voenRequired}
    />
  );
};

const mapStateToProps = (state: IAppState) => ({
  wareHouses: state.myInfo.wareHouses,
  loading: state.myInfo.loading,
});
export default connect(mapStateToProps, MyinfoActions)(CustomsWarehouses);
