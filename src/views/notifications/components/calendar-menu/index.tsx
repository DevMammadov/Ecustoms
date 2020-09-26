import React, { FC, useState } from "react";
import { MenuProps, Typography } from "@material-ui/core";
import { StyledMenu } from "./styled-menu";
import { useStyles } from "./calendar-menu.style";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { DateButton } from "./date-button";

export const CalendarMenu: FC<MenuProps> = ({ open, onClose, ...rest }) => {
  const classes = useStyles();
  const [startDate, changeStartDate] = useState(new Date());
  const [endtDate, changeEndDate] = useState(new Date());
  const [order, setOrder] = useState(1);

  return (
    <StyledMenu id="customized-menu" anchorEl={rest.anchorEl} keepMounted open={open} onClose={onClose} {...rest}>
      <Typography component="div" className={classes.menuHeader}>
        <DateButton onClick={() => setOrder(1)} date={startDate} />
        <DateButton onClick={() => setOrder(2)} date={endtDate} />
      </Typography>
      <Typography component="div" className={classes.menuBody}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            autoOk
            orientation="landscape"
            variant="static"
            openTo="date"
            disableToolbar
            animateYearScrolling={true}
            value={order === 1 ? startDate : endtDate}
            //@ts-ignore
            onChange={order === 1 ? changeStartDate : changeEndDate}
          />
        </MuiPickersUtilsProvider>
      </Typography>
    </StyledMenu>
  );
};
