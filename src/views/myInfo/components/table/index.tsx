import React from "react";
import { useStyles } from "./table.style";

export const Table = ({ children, header }: any) => {
  let classes = useStyles();

  return (
    <table className={classes.table}>
      {header && (
        <thead>
          <tr>
            <th>{header}</th>
          </tr>
        </thead>
      )}
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableItem = ({ label, value }: any) => {
  return (
    <tr>
      {label && <td>{label}</td>}
      {value && <td>{value}</td>}
    </tr>
  );
};
