import React from "react";
import { IPostals } from "./types";
import { IconButton } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faLockAlt } from "@fortawesome/pro-solid-svg-icons";
import { useStyles } from "./postal-services.style";
import { useTranslator } from "localization";
import { IModalData } from "components/shared/filter-bar/types";

export const columns = [
  { name: "", title: "", field: "", width: 20 },
  { name: "Tarix", title: `Tarix`, field: "inserT_DATE", width: 180 },
  { name: "Truck No", title: `Truck No`, field: "tR_NUMBER", width: 200 },
  { name: "İxracatçı", title: `İxracatçı`, field: "ixraC_NAME", width: 200 },
  { name: "Malın adı", title: `Malın adı`, field: "namE_OF_GOODS", width: 200 },
  { name: "Miqdarı", title: `Miqdarı`, field: "quantitY_OF_GOODS", width: 200 },
  { name: "Çəkisi", title: `Çəkisi`, field: "weighT_GOODS", width: 200 },
  { name: "İnvoys dəyəri", title: `İnvoys dəyəri`, field: "invoyS_PRICE", width: 200 },
  { name: "Sil", title: `Sil`, field: "", width: 200 },
];

export const Subcolumns = (handleRemove: any) => {
  const classes = useStyles();

  return [
    ...columns.filter((c) => c.name !== "Sil"),
    {
      name: "",
      title: ``,
      field: "",
      width: 200,
      render: (rowData: IPostals) => (
        <div className={classes.dataTableButtonsContainer} style={{ display: "flex", justifyContent: "space-around" }}>
          {rowData.senT_ST === 0 ? (
            <IconButton onClick={() => handleRemove(rowData.idn)}>
              <FontAwesomeIcon icon={faTrash} />
            </IconButton>
          ) : (
            <IconButton disabled={true}>
              <FontAwesomeIcon className={classes.lockIcon} icon={faLockAlt} />
            </IconButton>
          )}
        </div>
      ),
    },
  ];
};

export const useModalForm = (data: any[]) => {
  const lang = useTranslator("postal-services");

  return [
    {
      name: "GOODS_ID",
      label: lang.goodsCode,
      type: "text",
    },
    {
      name: "NAME_OF_GOODS",
      label: lang.goodsName,
      type: "text",
    },
    {
      name: "IDXAL_NAME",
      label: lang.importer,
      type: "text",
    },
    {
      name: "GOODS_TRAFFIC_FR",
      label: lang.senderCountry,
      type: "select",
      optionLabel: "name",
      optionValue: "code",
      data: data,
      showAtBar: false,
    },
    {
      name: "TR_NUMBER",
      label: lang.trackingNo,
      type: "text",
    },
  ] as IModalData[];
};
