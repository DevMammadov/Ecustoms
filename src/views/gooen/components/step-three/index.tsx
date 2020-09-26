import React, { FC } from "react";
import { IAppState } from "store/reducers";
import { connect } from "react-redux";
import { Paper, Grid } from "@material-ui/core";
import { faInfoCircle, faCheck } from "@fortawesome/pro-regular-svg-icons";
import { AlertPage } from "components/shared";
import { useTranslator } from "localization";
import { useStyles } from "./step-three.style";
import { IStepThree } from "views/gooen/types";

const StepThree: FC<IStepThree> = ({ result, person }) => {
  const classes = useStyles();
  const lang = useTranslator("gooen");

  const handlePrint = () => {
    let data = {
      surname: person.surname,
      name: person.name,
      fatherName: person.fatherName,
      serialNumber: person.serialNumber,
      issuiAuthority: person.issuiAuthority,
      issuingDate: person.issuingDate,
      expiryDate: person.expiryDate,
      gooen: result.gooen,
    };

    //printComponent(<PrintGooen data={data} />);
  };

  const title = (status: string) => {
    switch (status) {
      case "voen":
        return (
          <div>
            {lang.hasVoen1} <span className={classes.gooen}>{result?.gooen}</span> {lang.hasVoen2}
          </div>
        );
      case "old":
        return (
          <div>
            {lang.hasGooen1} <span className={classes.gooen}>{result?.gooen}</span> {lang.hasGooen2}
          </div>
        );
      case "new":
        return (
          <div>
            {lang.newGooen1} <span className={classes.gooen}>{result?.gooen}</span> {lang.newGooen2}
          </div>
        );
      case "updated":
        return (
          <div>
            {lang.updatedGooen1} <span className={classes.gooen}>{result?.gooen}</span> {lang.updatedGooen2}
          </div>
        );
      default:
        return "Unknown status";
    }
  };

  return (
    <Grid item xs={12} component={Paper} className={classes.hasVoen}>
      <AlertPage
        icon={result?.status === "updated" || "new" ? faCheck : faInfoCircle}
        color="primary"
        title={title(result?.status)}
        buttonTitle={lang.print}
        hasButton={true}
        onButtonClick={handlePrint}
      />
    </Grid>
  );
};

const mapStateToProps = (state: IAppState) => ({
  result: state.gooen.result,
  person: state.gooen.person,
});

export default connect(mapStateToProps, {})(StepThree);
