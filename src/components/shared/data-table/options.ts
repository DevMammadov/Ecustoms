import { Options } from "material-table";

export const defaultOptions: Options = {
  searchFieldAlignment: "right",
  paginationType: "stepped",
  pageSizeOptions: [1, 5, 10],
  searchFieldStyle: {
    border: "1px solid #AEAEAE",
    color: "#AEAEAE",
    paddingLeft: "5px",
    borderRadius: "5px",
  },
};

export const warnText =
  "when you are setting pagenate to true this means you want custom pagination, you must set this props 'limit, offset, dataCount, onOffsetChange, onLimitChange' ";
