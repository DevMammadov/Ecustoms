import React, { FC, useEffect, useState } from "react";
import { useStyles } from "./post-declaration.style.js";
import { useTranslator } from "localization";
import { connect } from "react-redux";
import { PostDeclarationActions } from "./store/action";
import { IAppState } from "store/reducers";
import { Grid, TableCell } from "@material-ui/core";
import { SectionHeader, DataTable, FilterBar } from "components/shared/";
import { useUser } from "hooks";
import { TotalCard, DecInfo } from "./components";
import { useTableData } from "./table-data";
import { links } from "routes";
import { IPostDeclarationState } from "./store/reducer";
import { IDeclarationFilter } from "./types";
import { Pagination } from "@material-ui/lab";
import { useHistory } from "react-router-dom";
import { getLimitOffset } from "helpers/common";
import moment from "moment";

export interface IPostDeclarationPage {
  posDecState: IPostDeclarationState;
  getTotalPrices(data: { docNo: string; nationality: string }): void;
  emptyTotalObject(): void;
  toggleFilter(data: IDeclarationFilter): void;
  searchDeclarations(data: IDeclarationFilter): void;
  clearDecInfo(): void;
}

const PostDeclaration: FC<IPostDeclarationPage> = ({
  posDecState,
  getTotalPrices,
  emptyTotalObject,
  toggleFilter,
  searchDeclarations,
  clearDecInfo,
}) => {
  const lang = useTranslator("postal-declaration");
  const classes = useStyles();
  const currentUser = useUser();
  const history = useHistory();
  const initialValues = {
    startDate: moment().startOf("month").format("YYYY-MM-DD hh:mm"),
    endDate: moment(new Date()).format("YYYY-MM-DD hh:mm"),
  };
  const [modal, setModal] = useState({ open: false, no: "" });

  useEffect(() => {
    if (posDecState.filter.isFiltered) {
      searchDeclarations({
        form: posDecState.filter.form,
        ...getLimitOffset(posDecState.filter?.offset, posDecState.filter?.limit),
      });
    } else {
      searchDeclarations({
        form: {
          docNo: currentUser.pin,
          nationality: currentUser.citizenship,
          dateFrom: initialValues.startDate,
          dateTo: initialValues.endDate,
        },
        ...getLimitOffset(posDecState.filter?.offset, posDecState.filter?.limit),
      });
    }
  }, [currentUser.localToken, posDecState.filter]);

  useEffect(() => {
    getTotalPrices({ docNo: currentUser.pin, nationality: currentUser.citizenship });
  }, []);

  const handlePagination = (page: number) => {
    if (page !== posDecState.filter.offset) {
      toggleFilter({ ...posDecState.filter, offset: page });
    }
  };

  const handleFilterFormSend = (data: any) => {
    const dateFrom = data.startDate;
    const dateTo = data.endDate;
    toggleFilter({
      ...posDecState.filter,
      isFiltered: true,
      limit: 10,
      offset: 0,
      form: { dateFrom, dateTo, nationality: currentUser.citizenship, docNo: currentUser.pin },
    });
  };

  const handleModalClose = () => {
    clearDecInfo();
    setModal({ no: "", open: false });
  };

  return (
    <Grid container style={{ opacity: currentUser.pageLoading ? 0.5 : 1 }}>
      <SectionHeader title={lang.postalDeclatationTitle} />
      <FilterBar
        initialValues={initialValues}
        onClear={() => toggleFilter({ ...posDecState.filter, isFiltered: false, form: {} as any })}
        onSend={(data) => handleFilterFormSend(data)}
        formName="postal-declaration-search"
        config={{ formatDate: false, showFilterButton: false, showTitleButton: true }}
        titleButtonText={`+ ${lang.addNewDeclaration}`}
        titleButtonLink={links.PostalDeclaration.add}
        onTitleButtonClick={() => emptyTotalObject()}
      />
      <Grid item xs={12} md={9} className={classes.tableContainer}>
        <DataTable
          data={posDecState.declarations?.declarations || []}
          //@ts-ignore
          columns={useTableData((no) => setModal({ no, open: true }))}
          options={{
            search: false,
            toolbar: false,
            pageSize: 10,
          }}
          components={{
            Pagination: (props: any) => (
              <TableCell className={classes.pagination}>
                <Pagination
                  onChange={(event: object, page: number) => handlePagination(page)}
                  count={Math.ceil(posDecState.declarations?.count / 10)}
                  shape="rounded"
                  page={posDecState.filter.offset}
                />
              </TableCell>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12} md={3} className={classes.cardContainer}>
        <TotalCard totalPrice={posDecState.totalPrice} type="month" title={lang.lastMonth} />
        <TotalCard
          showQuestionMark
          totalPrice={posDecState.totalPrice}
          type="total"
          color="permission"
          title={lang.totalPaidDuty}
        />
      </Grid>
      <DecInfo declarationNo={modal.no} open={modal.open} onClose={handleModalClose} />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({ posDecState: state.postalDeclaration });
export default connect(mapStateToProps, PostDeclarationActions)(PostDeclaration);
