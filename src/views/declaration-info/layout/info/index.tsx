import React, { FC } from "react";
import { Grid, Paper, Link } from "@material-ui/core";
import { SectionHeader } from "components/shared";
import { useTranslator } from "localization";
import { Button } from "components/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltToBottom } from "@fortawesome/pro-solid-svg-icons";
import { useStyles } from "./info.style";
import { InfoForm } from "../../components/info-form";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { getDeclDoc } from "views/declaration-info/store/actions";

export interface IInfo {
  getDeclDoc(id: number): void;
  declarationId: number;
}

const Info: FC<IInfo> = ({ getDeclDoc, declarationId }) => {
  const classes = useStyles();
  const lang = useTranslator("declarationInfo");
  const handleClick = (id: any) => {
    console.log(getDeclDoc(id));
  };
  return (
    <Grid container>
      <Grid item xs={12}>
        <SectionHeader title={lang.declarationTitle} />
      </Grid>
      <div className={classes.infoContainer}>
        <Paper className={classes.paperContainer}>
          <div className={classes.divContainer}>
            <Grid item xs={12}>
              <SectionHeader title={lang.infoFormName} className={classes.makeStylesMedium81} />
              <div className={classes.form}>
                <InfoForm />
              </div>
            </Grid>
          </div>
        </Paper>

        <Paper className={classes.paperContainer}>
          <div className={classes.divContainer}>
            <Grid item xs={12}>
              <SectionHeader title={lang.infoFormSecondName} className={classes.makeStylesMedium81} />
              <Button
                onClick={() => handleClick(declarationId)}
                variant="contained"
                type="submit"
                color="primary"
                startIcon={<FontAwesomeIcon icon={faArrowAltToBottom} />}
                className={classes.button}
              >
                {lang.downloadName}
              </Button>
              <div className={classes.fontColor}>
                <h3> {lang.noteTitle}</h3>
                {lang.note1}
                <Link
                  target="_blank"
                  href="https://asanimza.az/category/asan-doc-ru/"
                  underline="always"
                  className={classes.link}
                >
                  AsanDoc
                </Link>
              </div>
            </Grid>
          </div>
        </Paper>
      </div>
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  declarationId: state.declarationInfo.searchData.id,
});

export default connect(mapStateToProps, getDeclDoc)(Info);
