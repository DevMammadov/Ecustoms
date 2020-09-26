import { Grid, isWidthUp, withWidth } from "@material-ui/core";
import { SectionHeader } from "components/shared";
import React from "react";
//import { useStyles } from "./my-info.style";
import { MyInfoMobile } from "./layouts/mobile";
import { MyInfoDesktop } from "./layouts/web";
import { useTranslator } from "localization";

const MyInfo = ({ match, width }: any) => {
  //const classes = useStyles();
  const lang = useTranslator("myInfo");

  return (
    <Grid container>
      <SectionHeader title={lang.myInfo} />
      <Grid item xs={12}>
        {isWidthUp("sm", width) ? <MyInfoDesktop page={match.params.tab} /> : <MyInfoMobile page={match.params.tab} />}
      </Grid>
    </Grid>
  );
};

export default withWidth()(MyInfo);
