import { Aside, Header } from "components/layout";
import React, { FC, useState } from "react";
import { AppRouter } from "routes";
import { useStyles } from "./layout.style";

interface IAppLayoutPage {}

const App: FC<IAppLayoutPage> = () => {
  const classes = useStyles();
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={classes.container}>
      <Aside collapse={collapse} setCollapse={setCollapse} className={classes.aside} />
      <main>
        <Header collapseMenu={() => setCollapse(!collapse)} />
        <AppRouter />
      </main>
    </div>
  );
};

export default App;
