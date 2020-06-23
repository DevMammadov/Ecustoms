import React from "react";
import { useStyles } from "./profile.style";
import photo from "assets/ferid.jpg";

interface IProps {
  user: any;
  className?: string;
}

export const Profile = ({ user, className }: IProps) => {
  const classes = useStyles();

  return (
    <div className={`${classes.profile} ${className}`}>
      <img src={photo} alt={user} />
    </div>
  );
};
