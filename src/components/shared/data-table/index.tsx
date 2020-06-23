import { TablePagination } from "@material-ui/core";
import clsx from "clsx";
import { useTranslator } from "localization";
import MaterialTable, { MaterialTableProps } from "material-table";
import React, { FC, useEffect } from "react";
import { useStyles } from "./data-table.style";
import { defaultOptions, warnText } from "./options";

export interface IMaterialTable {
  onLimitChange?(event: object, limit: number): void;
  onOffsetChange?(event: object, limit: number): void;
  offset?: number;
  limit?: number;
  dataCount?: number;
  stripped?: boolean;
  pagenate?: boolean;
}

export const DataTable: FC<IMaterialTable & MaterialTableProps<object>> = ({
  onLimitChange,
  onOffsetChange,
  offset,
  limit,
  dataCount,
  stripped,
  pagenate,
  ...rest
}) => {
  const lang = useTranslator("main");
  const classes = useStyles();

  useEffect(() => {
    if (pagenate && (limit === undefined || offset === undefined || dataCount === undefined)) {
      console.error(warnText);
    }
  });

  return (
    <div className={clsx(classes.root, stripped && classes.stripped)}>
      <MaterialTable
        {...rest}
        options={{ ...defaultOptions, ...rest.options }}
        localization={{
          body: {
            emptyDataSourceMessage: lang.noRecordToDisplay,
          },
          pagination: {
            labelRowsSelect: lang.row,
          },
        }}
        components={
          pagenate
            ? {
                Pagination: (props: any) => (
                  <TablePagination
                    {...props}
                    onChangePage={(event: object, page: number) => onLimitChange && onLimitChange(event, page)}
                    onChangeRowsPerPage={(event: object, page: number) => onOffsetChange && onOffsetChange(event, page)}
                    rowsPerPage={offset}
                    count={dataCount}
                    page={limit}
                  />
                ),
              }
            : {}
        }
      />
    </div>
  );
};

export * from "material-table";
