import { faBars } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconButton, withWidth, isWidthUp } from "@material-ui/core";
import clsx from "clsx";
import React, { FC, useEffect, useState } from "react";
import { connect } from "react-redux";
import { IAppState } from "store/reducers";
import { ISendToken, ISertificate } from "types";
import { userActions } from "views/login/store/action";
import { Keylist, LoginButton, Notify, Profile, Settings, Lang } from "./components";
import { useStyles } from "./header.style";
import { headerActions } from "./store/header.actions";
import { notifyActions } from "views/notifications/store/action";
import { IHeaderStore } from "./store/header.reducer";
import { useUser } from "hooks";
import { INotifyState } from "views/notifications/store/reducer";
import * as signalR from "@microsoft/signalr";
import { setToStorage } from "helpers/storage";
import { useHistory } from "react-router-dom";

interface IHeaderProps {
  collapseMenu(): void;
  sendToken(payload: ISendToken): void;
  className?: string;
  notify: INotifyState;
  header: IHeaderStore;
  setTheme(theme: string): void;
  changeLang(lang: string): void;
  getLastNotify(): void;
  width: any;
}

const Header: FC<IHeaderProps> = ({
  collapseMenu,
  sendToken,
  className,
  header,
  setTheme,
  changeLang,
  getLastNotify,
  width,
  notify,
}) => {
  const classes = useStyles();
  const currentUser = useUser();
  const [hubConn, setHubConn] = useState<any>(null);
  const [notifyCount, setNotifyCount] = useState<number>(0);
  const history = useHistory();

  useEffect(() => {
    if (!hubConn) {
      const hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(`${process.env.REACT_APP_API_BASE_URL}/notify`)
        .configureLogging(signalR.LogLevel.Information)
        .withAutomaticReconnect()
        .build();
      setHubConn(hubConnection);
    }

    if (hubConn && hubConn.connectionState === "Disconnected") {
      hubConn.start().then(() => {
        if (hubConn.connectionId) {
          hubConn
            .invoke("newNotification", hubConn.connectionId, `Bearer ${currentUser.localToken}`)
            .catch((err: any) => console.error(err));
        }
      });
    }

    if (hubConn) {
      hubConn
        ?.on("setClientMessage", (message: any) => {
          if (message === true) {
            hubConn
              .invoke("newNotification", hubConn.connectionId, currentUser.localToken)
              .catch((err: any) => console.error(err));
          }
          if (typeof message?.data === "number") {
            setNotifyCount(message.data);
          }
        })
        ?.catch((err: any) => console.error(err));
    }
  }, [hubConn, currentUser.localToken]);

  const handleSertificateSelect = (sertNumber: string) => {
    if (currentUser.isLogin) {
      const voen =
        currentUser.sertificates.filter((sert: ISertificate) => sert.certificateNumber === sertNumber)[0].structureData
          ?.voen || "null";
      sendToken({ token: currentUser.asanToken, voen: voen });
      setToStorage("selectedSert", currentUser.sertificates.filter((c) => c.certificateNumber === sertNumber)[0]);
      hubConn.stop();
    }
  };

  const getNotifications = () => {
    getLastNotify();
  };

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
  };

  const renderRight = () => {
    return currentUser.isLogin ? (
      <>
        {currentUser.loginType !== "loginWithPassword" && isWidthUp("sm", width) && (
          <Keylist
            sertificates={currentUser.sertificates}
            selected={currentUser.selectedSertificate?.certificateNumber}
            onChange={handleSertificateSelect}
            className={classes.keylist}
            loading={currentUser.pageLoading}
          />
        )}

        <div className={classes.profile}>
          <Profile />
        </div>
        <Lang selected={header.lang} changeLang={(lang) => changeLang(lang)} />
        <Notify count={notifyCount} type="sms" data={notify.lastNotify} />
        <Notify
          onClick={getNotifications}
          count={notifyCount}
          type="notify"
          loading={notify.loading}
          data={notify.lastNotify}
        />
        <Settings selected={header.theme} onThemeChange={handleThemeChange} />
      </>
    ) : (
      !currentUser.pageLoading && <LoginButton />
    );
  };

  return (
    <div className={clsx(classes.navbar, className && className)}>
      <div>
        <IconButton onClick={collapseMenu} className={classes.menuButton}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
      </div>
      <div className={classes.headerRight}>{renderRight()}</div>
    </div>
  );
};

const mapStateToProps = (state: IAppState) => {
  return {
    header: state.header,
    notify: state.notify,
  };
};
export default withWidth()(connect(mapStateToProps, { ...userActions, ...headerActions, ...notifyActions })(Header));
