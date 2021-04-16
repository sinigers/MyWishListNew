import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import AddItemIcon from "@material-ui/icons/AddCircleOutline";

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
      <BottomNavigationAction label="Скорошни" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Любими" icon={<FavoriteIcon />} />
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Списък"
        icon={<AddItemIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/glossary"
        label="Речник"
        icon={<MenuBookIcon />}
      />
    </BottomNavigation>
  );
}
