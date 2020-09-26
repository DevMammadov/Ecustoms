import React, { FC, useState } from 'react';
import { useStyles } from './collapse-table.style';
import { useTranslator } from 'localization';
import { DataTable, Table, Button } from 'components/shared';
import { Collapse, TableRow, TableCell, IconButton } from '@material-ui/core';
import { faFileUpload } from '@fortawesome/pro-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/pro-light-svg-icons';
import { faMobileAlt, faUser, faIdCard } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';
import { links } from 'routes';
import Pagination from '@material-ui/lab/Pagination/Pagination';
import clsx from 'clsx';

interface IClasses {
  subTableCell?: string;
}

export interface ICollapseTable {
  data: any[];
  onRowOpen?(fin: string): void;
  columns: any[];
  subColumns: any[];
  subData: any[];
  loading?: boolean;
  onPageChange?(page: number): void;
  dataCount?: number;
  currentPage?: number;
  onRowClose?(fin: string): void;
  limit?: number;
  onAllRowClose?(fins: string[]): void;
  subDataID: string;
  classes?: IClasses;
}

export const CollapseTable: FC<ICollapseTable> = ({
  data,
  columns,
  onRowOpen = () => {},
  subData,
  subColumns,
  onPageChange = () => {},
  onAllRowClose = () => {},
  loading,
  dataCount = 1,
  currentPage,
  onRowClose = () => {},
  limit = 1,
  subDataID,
  classes,
}) => {
  const lang = useTranslator('postal-services');
  const styles = useStyles();
  const [collapse, setCollapse] = useState<string[]>([]);
  const [currPage, setSubTablePage] = useState(1);
  const history = useHistory();

  const handleRowClick = (subId: string) => {
    if (collapse.includes(subId)) {
      setCollapse([...collapse.filter((c) => c !== subId)]);
      onRowClose(subId);
    } else {
      onRowOpen(subId);
      setCollapse([...collapse, subId]);
    }
    setSubTablePage(1);
  };

  const handleAllRowsClose = () => {
    setCollapse([]);
    onAllRowClose(collapse);
  };

  const handlePageChange = (page: number) => {
    setSubTablePage(page);
  };

  const renderRow = (data: any) => {
    return (
      <TableRow>
        <TableCell colSpan={data.columns.length} className={styles.tableCell}>
          <div onClick={() => handleRowClick(data.data[subDataID])} className={styles.rowContentContainer}>
            <div className={styles.iconContainer}>
              <FontAwesomeIcon
                className={styles.collapseIcon}
                icon={collapse.includes(data.data[subDataID]) ? faChevronUp : faChevronDown}
              />
            </div>
            <div className={styles.collapseButton}>
              <span className={styles.fin}>
                <FontAwesomeIcon className={styles.icon} icon={faIdCard} /> {Object.values(data.data)[1]}
              </span>
              <span className={styles.nameSurname}>
                <FontAwesomeIcon className={styles.icon} icon={faUser} /> {Object.values(data.data)[2]}
              </span>
              <span>
                <FontAwesomeIcon className={styles.icon} icon={faMobileAlt} /> {Object.values(data.data)[3]}
              </span>
            </div>
          </div>
          <Collapse
            timeout="auto"
            unmountOnExit
            in={collapse.includes(data.data[subDataID])}
            className={styles.collapse}
          >
            <Table
              columns={subColumns}
              classes={{ cell: clsx(styles.subtableCell, classes?.subTableCell) }}
              showHeader={false}
              shadow={false}
              data={subData.filter((sb) => sb[subDataID] === data.data[subDataID])[0]?.data}
              loading={!subData.filter((sb) => sb[subDataID] === data.data[subDataID])[0]?.data}
              paginate
              limit={6}
              page={currPage}
              onPageChange={handlePageChange}
            />
          </Collapse>
        </TableCell>
      </TableRow>
    );
  };

  const handlePagination = (page: number) => {
    setCollapse([]);
    onPageChange(page);
  };

  return (
    <div className={styles.collapseTableContainer}>
      <IconButton className={styles.collapseAllButton} onClick={handleAllRowsClose}>
        <FontAwesomeIcon icon={collapse.length > 0 ? faChevronUp : faChevronDown} />
      </IconButton>
      <DataTable
        className={styles.collapseTable}
        stripped
        columns={columns}
        data={data || []}
        components={{
          Row: (props: any) => renderRow(props),
          Pagination: (props: any) => (
            <TableCell className={styles.pagination}>
              <Pagination
                onChange={(event: object, page: number) => handlePagination(page)}
                count={Math.ceil(dataCount / 10)}
                shape="rounded"
                page={currentPage}
              />
            </TableCell>
          ),
        }}
        title={
          <Button
            variant="contained"
            className={styles.dataTableTitleButton}
            onClick={() => history.push(links.PostalServices.add)}
            type="submit"
            color="primary"
            icon={faFileUpload}
          >
            {lang.addNewXml}
          </Button>
        }
        options={{ pageSize: limit, sorting: false, toolbar: false }}
      />
    </div>
  );
};
