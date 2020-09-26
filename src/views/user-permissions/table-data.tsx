import { faPen, faPrint, faTrash } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, Switch } from "@material-ui/core";
import { Column } from "components/shared/data-table";
import { useTranslator } from "localization";
import React from "react";
import { useStyles } from "./user-permissions.style";
import { IPermissionUser } from "./types";

export const useTableData = (handleEdit: any, handleRemove: any, handleStatusChange: any) => {
  const lang = useTranslator();
  const classes = useStyles();

  const columns: Column<any>[] = [
    { title: `${lang.signatureNumber}`, field: "signatureNumber" },
    { title: `${lang.pinCode}`, field: "pinCode" },
    { title: `${lang.lastName} ${lang.name}`, field: "fullName" },
    {
      title: `${lang.active} / ${lang.deactive}`,
      field: "status",
      editable: "never",
      render: (rowData: IPermissionUser) => (
        <Switch
          checked={rowData.status === 1}
          onChange={handleStatusChange(rowData)}
          color="primary"
          value="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
      ),
    },
    {
      //@ts-ignore
      width: 160,
      title: "",
      field: "action",
      editable: "never",
      render: (rowData: IPermissionUser) => (
        <div className={classes.dataTableButtonsContainer}>
          <IconButton className={classes.dataTableButton} onClick={() => handleEdit(rowData)}>
            <FontAwesomeIcon icon={faPen} />
          </IconButton>
          <IconButton className={classes.dataTableButton} onClick={() => handleRemove(rowData)}>
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
          <IconButton className={classes.dataTableButton}>
            <FontAwesomeIcon icon={faPrint} />
          </IconButton>
        </div>
      ),
    },
  ];

  return columns;
};
