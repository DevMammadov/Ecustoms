export interface IColumn {
  name: string;
  title: string;
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
}
