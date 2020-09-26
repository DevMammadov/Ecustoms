import { useTranslator } from "localization";
import React from "react";
import { IconButton, Link } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faPrint } from "@fortawesome/pro-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { IXifDoc } from "./types";
import { useStyles } from "./components/xif-doc-list/xif-doc-list.style";
import { links } from "routes";
import { IModalData } from "components/shared/filter-bar/types";
import moment from "moment";

export const useColumns = (handleRemove: Function, onFileOpen: Function) => {
  const lang = useTranslator("xifDocs", ["myInfo"]);
  const history = useHistory();
  const classes = useStyles(0);

  return [
    { title: `${lang.pinCodeOf}`, field: "pinCode" },
    { title: `${lang.contractNo}`, field: "contractNo" },
    {
      title: `${lang.insertDate}`,
      field: "insertDate",
      render: (rowData: IXifDoc) => moment(rowData.insertDate).format("DD.MM.YYYY"),
    },
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
};

export const useModalForm = (docTypes: any[]) => {
  const lang = useTranslator("xifDocs", ["myInfo"]);
  return [
    {
      name: "docType",
      type: "select",
      data: docTypes,
      optionValue: "idn",
      optionLabel: "name",
      label: lang.docType,
    },
    {
      name: "pinCode",
      type: "text",
      label: "Pin kod",
    },
    {
      name: "contractNo",
      type: "text",
      label: lang.contractNo,
    },
  ] as IModalData[];
};
