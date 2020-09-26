import React, { useState, FC } from "react";
import { TabPanel } from "views/myInfo/components";
import { Typography, Tabs, Tab, Button, Link } from "@material-ui/core";
import { TextField } from "components/shared";
import { useStyles } from "./login-form.style";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";
import { icon } from "./login-icon";
import { useTranslator } from "localization";

export interface ILoginData {
  login: string;
  password: string;
}

export interface ILoginForm {
  onFormSubmit(data: ILoginData): void;
  onLoginClick(): void;
}

export const LoginForm: FC<ILoginForm> = ({ onFormSubmit, onLoginClick }) => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const lang = useTranslator("login");

  const { register, handleSubmit } = useForm<ILoginData>();

  const renderIcon = () => {
    const asanLogin = {
      prefix: "fac",
      iconName: "asan-login",
      icon: [200, 200, [], "", icon],
    };
    return asanLogin;
  };

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const onSubmit = (data: ILoginData) => {
    onFormSubmit(data);
  };

  const asanLoginClick = (e: any) => {
    e.preventDefault();
    onLoginClick();
  };

  return (
    <Typography component="div" className={classes.tabContainer}>
      <Tabs
        value={value}
        classes={{ indicator: classes.tabIndicator, root: classes.tabs }}
        onChange={handleChange}
        aria-label="login tabs"
      >
        <Tab label={lang.asanLogin} {...a11yProps(1)} />
        <Tab label={lang.userName} disabled {...a11yProps(0)} />
      </Tabs>
      <Typography component="div" className={classes.tabContent}>
        <TabPanel value={value} index={0}>
          <Link
            onClick={(e: any) => asanLoginClick(e)}
            component="div"
            href="/"
            underline="none"
            className={classes.asanButton}
          >
            <Typography component="div" className={classes.iconContainer}>
              <FontAwesomeIcon className={classes.icon} icon={renderIcon() as IconDefinition} />
            </Typography>
            <Typography component="div" className={classes.asanButtonText}>
              {lang.asanLogin}
            </Typography>
          </Link>
          <Typography component="div" className={classes.asanLoginText}></Typography>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <form onSubmit={handleSubmit(onSubmit)} className={classes.loginForm}>
            <TextField name="login" label={lang.userName} inputRef={register} />
            <TextField label={lang.password} name="password" type="password" inputRef={register} />
            <Button type="submit" variant="contained" color="primary">
              {lang.login}
            </Button>
          </form>
          <Typography component="div" className={classes.registerText}>
            {`${lang.noProfile} ? `} <Link>{lang.register}</Link>
          </Typography>
        </TabPanel>
      </Typography>
    </Typography>
  );
};
