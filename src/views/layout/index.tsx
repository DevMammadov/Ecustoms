import { Aside, Header } from "components/layout";
import React, { FC } from "react";
import { AppRouter } from "routes";
import { useStyles } from "./layout.style";
import { withWidth, isWidthUp } from "@material-ui/core";
import clsx from "clsx";

interface IAppLayoutPage {
  width: any;
}

const App: FC<IAppLayoutPage> = ({ width }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(isWidthUp("sm", width));

  return (
    <div style={{ height: "100%" }}>
      <div className={classes.beta}> Beta versiya </div>
      <div className={classes.container}>
        <Header
          collapseMenu={() => setOpen(!open)}
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
        />
        <Aside open={open} setCollapse={setOpen} className={classes.aside} />
        <main className={classes.main}>
          <section className={classes.section}>
            <AppRouter />
          </section>
        </main>
      </div>
    </div>
  );
};

export default withWidth()(App);
