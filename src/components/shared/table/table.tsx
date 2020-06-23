import React, { FC } from "react";
import { TableContainer, Paper, TableHead, TableRow, TableCell, TableBody, Table as MuiTable } from "@material-ui/core";
import { IColumn, ITableProps } from "./types";
import { useStyles } from "./table.style";
import clsx from "clsx";

export const Table: FC<ITableProps> = ({ data, columns, classes, className }) => {
  const classNames = useStyles();
  console.log(data);

  return (
    <TableContainer component={Paper} className={clsx(className && className, classNames.table)}>
      <MuiTable size="small" aria-label="a dense table" classes={{ root: classes?.table }}>
        <TableHead classes={{ root: classes?.header }}>
          <TableRow>
            {columns.map((column: IColumn) => (
              <TableCell key={column.name} align="center" variant="head" component="th">
                {column.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody classes={{ root: classes?.body }}>
          {data.length <= 0 ? (
            <TableRow>
              <TableCell component="td" align="center" scope="row">
                info tapilmadi
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, index) => (
              <TableRow key={index}>
                {columns.map((column: IColumn) => (
                  <TableCell key={column.title} component="td" align="center" scope="row">
                    {row[column.name]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </MuiTable>
    </TableContainer>
  );
};
