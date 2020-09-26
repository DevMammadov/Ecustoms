export interface IColumn {
  name: string;
  field: string;
  title?: string;
  width?: number;
  render?(rowData: any): void;
}

interface IClasses {
  header?: string;
  row?: string;
  cell?: string;
  body?: string;
  container?: string;
  table?: string;
}

export interface ITableProps {
  data: any[];
  columns: IColumn[];
  classes?: IClasses;
  className?: string;
  showHeader?: boolean;
  shadow?: boolean;
  loading?: boolean;
  paginate?: boolean;
  limit?: number;
  page?: number;
  onPageChange?(page: number): void;
}
