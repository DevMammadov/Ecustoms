import { Grid, IconButton, Paper, Link } from "@material-ui/core";
import { DataTable } from "components/shared/data-table";
import React, { FC, useState } from "react";
import { IXifDoc, ISearchResponse, IXifDocListPage, IRemoveDoc } from "../../types";
import { useStyles } from "./xif-doc-list.style";
import { Popup } from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPrint } from "@fortawesome/pro-solid-svg-icons";
import { useTranslator } from "localization";
import { FilterForm } from "../../components";
import moment from "moment";
import { useHistory } from "react-router-dom";
import { links } from "routes";

export const XifDocList: FC<IXifDocListPage> = ({ xifDocs, onFilterStart, sendFilterForm, onRemove, onFileOpen }) => {
  const lang = useTranslator("xifDocs", ["myInfo"]);
  const [open, setOpen] = useState<boolean>(false);
  const [itemToRemove, setItemToRemove] = useState<IRemoveDoc | null>(null);
  const classes = useStyles();
  const history = useHistory();

  const columns = [
    { title: `${lang.pinCode}`, field: "pinCode" },
    { title: `${lang.insertDate}`, field: "insertDate" },
    { title: `${lang.typeName}`, field: "typeName" },
    { title: `${lang.note}`, field: "note" },
    {
      title: `${lang.doc}`,
      field: "docPath",
      render: (rowData: IXifDoc) => (
        <Link onClick={() => onFileOpen(rowData.id)} target="_blank">
          {rowData.docPath || ""}
        </Link>
      ),
    },
    {
      title: "",
      field: "action",
      editable: "never",
      width: 160,
      render: (rowData: IXifDoc) => (
        <div className={classes.dataTableButtonsContainer}>
          <IconButton onClick={() => history.push(`${links.XifDoc.update}${rowData.id}`)}>
            <FontAwesomeIcon icon={faPen} />
          </IconButton>
          <IconButton onClick={() => handleRemove(rowData)}>
            <FontAwesomeIcon icon={faTrash} />
          </IconButton>
          <IconButton>
            <FontAwesomeIcon icon={faPrint} />
          </IconButton>
        </div>
      ),
    },
  ];

  const handleRemove = (worker: IXifDoc) => {
    setItemToRemove({ id: worker.id, pinCode: worker.pinCode } as IRemoveDoc);
    setOpen(!open);
  };

  const handleDialogAllow = () => {
    if (itemToRemove) {
      onRemove(itemToRemove);
      setOpen(!open);
    }
  };

  const handleDialogDeny = () => {
    setItemToRemove(null);
    setOpen(!open);
  };

  const handleEdit = (worker: IXifDoc) => {
    console.log("test");
  };

  const handleFormSend = (data: any) => {
    onFilterStart();
    let senddata: ISearchResponse = {
      startDate: moment(data.startDate).format("DD.MM.YYYY"),
      endDate: moment(data.endDate).format("DD.MM.YYYY"),
      docType: data.docType,
    };
    sendFilterForm(senddata);
  };

  return (
    <>
      <Grid component={Paper} item xs={12} className={classes.xifDocHeader}>
        <FilterForm onSubmit={handleFormSend} />
      </Grid>
      <Grid item xs={12} style={{ marginBottom: "80px" }}>
        <DataTable
          // @ts-ignore
          columns={columns}
          data={xifDocs}
          options={{
            search: false,
            toolbar: false,
          }}
        />
        <Popup
          type="remove"
          open={open}
          children={null}
          onAllow={handleDialogAllow}
          onDeny={handleDialogDeny}
          title={lang.removeWorkerPermissionDialog}
        />
      </Grid>
    </>
  );
};
