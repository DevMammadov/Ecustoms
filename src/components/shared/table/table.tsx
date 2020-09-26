import React, { FC, useState, memo, useMemo } from "react";
import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as MuiTable,
  CircularProgress,
} from "@material-ui/core";
import { IColumn, ITableProps } from "./types";
import { useStyles } from "./table.style";
import clsx from "clsx";
import { useTranslator } from "localization";
import Pagination from "@material-ui/lab/Pagination/Pagination";

export const Table: FC<ITableProps> = memo(
  ({
    data,
    columns,
    classes,
    className,
    showHeader = true,
    shadow = true,
    loading = false,
    paginate = false,
    limit = 6,
    page = 1,
    onPageChange = () => {},
  }) => {
    const classNames = useStyles();
    const lang = useTranslator("main");
    const [currPage, setCrrPage] = useState<number>(page || 1);
    const tableData = useMemo(
      () => (paginate ? (data ? data.slice((currPage - 1) * limit, (currPage - 1) * limit + limit) : []) : data),
      [currPage, limit, data, paginate]
    );

    const handlePageChange = (event: object, page: number) => {
      setCrrPage(page);
      onPageChange(page);
    };

    return (
      <TableContainer component={shadow ? Paper : "div"} className={clsx(className && className, classNames.table)}>
        <MuiTable size="small" aria-label="a dense table" classes={{ root: classes?.table }}>
          {showHeader && (
            <TableHead classes={{ root: classes?.header }}>
              <TableRow className={clsx(classes?.row)}>
                {columns.map((cell: IColumn, index: number) => (
                  <TableCell
                    key={index}
                    style={{ width: cell.width ? cell.width : "unset" }}
                    className={clsx(classes?.cell)}
                    align="center"
                    variant="head"
                    component="th"
                  >
                    {cell.title}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody classes={{ root: classes?.body }}>
            {loading ? (
              <TableRow>
                <TableCell component="td" align="center" scope="row" style={{ border: "none", padding: 0 }}>
                  <CircularProgress size={30} />
                </TableCell>
              </TableRow>
            ) : tableData?.length <= 0 ? (
              <TableRow>
                <TableCell component="td" align="center" scope="row" style={{ border: "none" }}>
                  {lang.noInfo}
                </TableCell>
              </TableRow>
            ) : (
              tableData?.map((row: any, index: number) => (
                <TableRow key={index} className={clsx(classes?.row)}>
                  {columns.map((cell: IColumn, index: number) => (
                    <TableCell
                      style={{ width: cell.width ? cell.width : "unset" }}
                      className={clsx(classes?.cell)}
                      key={index}
                      component="td"
                      align="center"
                      scope="row"
                    >
                      {cell.render ? cell.render(row) : row[cell.field]}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            )}
          </TableBody>
        </MuiTable>
        {paginate && !loading && data.length > limit && (
          <div className={classNames.paginateContainer}>
            <Pagination
              count={Math.ceil(data.length / limit)}
              defaultPage={currPage}
              onChange={handlePageChange}
              shape="rounded"
            />
          </div>
        )}
      </TableContainer>
    );
  }
);
