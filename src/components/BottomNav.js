import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AddItemIcon from "@material-ui/icons/AddCircleOutline";
import HomeIcon from "@material-ui/icons/Home";

import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Начало"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/additem"
        label="Списък"
        icon={<AddItemIcon />}
      />
    </BottomNavigation>
  );
}
