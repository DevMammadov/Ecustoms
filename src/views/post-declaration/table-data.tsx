import React from "react";
import { useTranslator } from "localization";
import { IDeclaration } from "./types";
import { useStyles } from "./post-declaration.style";
import { IconButton, Tooltip, Link } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/pro-solid-svg-icons";
import { links } from "routes";
import { useHistory } from "react-router-dom";
import { Button } from "components/shared";
import clsx from "clsx";

export const useTableData = (selectDec: any) => {
  const lang = useTranslator("postal-declaration");
  const classes = useStyles();
  const history = useHistory();

  return [
    { title: lang.declarationNumber, field: "declarationNumber", width: 160 },
    { title: lang.date, field: "declarationDate", width: 160 },
    { title: lang.carrierCompany, field: "carrierCompany" },
    { title: lang.senderCompany, field: "sender" },
    { title: lang.priceAzn, field: "invoicePriceAzn" },
    {
      title: lang.totalDutyAzn,
      field: "dutyAzn",
      width: 60,
      render: (rowData: IDeclaration) => (
        <span className={clsx(rowData.exceedLimit && classes.colorWarn)}>{rowData.dutyAzn}</span>
      ),
    },
    {
      title: "",
      field: "action",
      editable: "never",
      width: 20,
      render: (rowData: IDeclaration) => (
        <div className={classes.previewButton}>
          <Tooltip title={lang.preview}>
            <IconButton onClick={() => selectDec(rowData.declarationNumber)}>
              <FontAwesomeIcon icon={faEye} />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
    {
      title: "",
      field: "action",
      editable: "never",
      width: 60,
      render: (rowData: IDeclaration) => (
        <div>
          {rowData.paymentStatus === 0 && (
            <Button
              onClick={() =>
                window.open("https://gpp.az/WebPortal/Infosite/RedirectFromSc/980200/aHR0cHM6Ly9ncHAuYXov", "_blank")
              }
              dontCheckLogin
              className={classes.tableButton}
              variant="contained"
              design="green"
            >
              {lang.pay2}
            </Button>
          )}
        </div>
      ),
    },
  ];
};
