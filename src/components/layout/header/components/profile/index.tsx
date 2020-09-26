import React, { FC, useEffect } from "react";
import { useStyles } from "./profile.style";
import { connect } from "react-redux";
import { userActions } from "views/login/store/action";
import { IAppState } from "store/reducers";
import { faUser } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

interface IProfile {
  className?: string;
  photo: string;
  getUserPhoto(): void;
}

const Profile: FC<IProfile> = ({ className, photo, getUserPhoto }) => {
  const classes = useStyles();

  useEffect(() => {
    getUserPhoto();
  }, []);

  return (
    <div className={clsx(classes.profile, className)}>
      {photo ? (
        <img src={`data:image/png;base64,${photo}`} alt="" />
      ) : (
        <FontAwesomeIcon icon={faUser} className={classes.user} />
      )}
    </div>
  );
};

const mapStateToProps = (state: IAppState) => ({
  photo: state.user.photo,
});

export default connect(mapStateToProps, userActions)(Profile);
