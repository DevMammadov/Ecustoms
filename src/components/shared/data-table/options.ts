import { Options } from "material-table";

//@ts-ignore
export const defaultOptions: Options<any> = {
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
