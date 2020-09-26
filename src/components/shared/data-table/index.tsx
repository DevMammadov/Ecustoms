import clsx from "clsx";
import { useTranslator } from "localization";
import MaterialTable, { MaterialTableProps } from "material-table";
import React, { FC } from "react";
import { useStyles } from "./data-table.style";
import { defaultOptions } from "./options";

export interface IMaterialTable {
  stripped?: boolean;
  className?: string;
}

export const DataTable: FC<IMaterialTable & MaterialTableProps<object>> = ({ stripped, className, ...rest }) => {
  const lang = useTranslator("main");
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, stripped && classes.stripped, className)}>
      <MaterialTable
        options={{ ...defaultOptions, ...rest.options }}
        localization={{
          body: {
            emptyDataSourceMessage: lang.noRecordToDisplay,
          },
          pagination: {
            labelRowsSelect: lang.row,
            nextTooltip: lang.next,
            previousTooltip: lang.back,
            lastTooltip: lang.lastPage,
            firstTooltip: lang.firstPage,
          },
        }}
        {...rest}
      />
    </div>
  );
};

export * from "material-table";
