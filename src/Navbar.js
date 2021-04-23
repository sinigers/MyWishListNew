import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Add from "@material-ui/icons/Add";
import moment from "moment";
import RadioSwitch from "./components/RadioSwitch";
import { EditText } from "react-edit-text";
// import "../styles.scss";
// import "react-edit-text/dist/index.css";
/**
 * Material Icons
 */
import Edit from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import Favorite from "@material-ui/icons/Favorite";

/**
 * You need this for icons to work!
 */
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

/**
 * Reusable animated component
 */
// import BottomSheet from "./BottomSheet";

/**
 * Items to render as props for BottomSheet
 */
const itemsBottomSheet = [
  {
    text: "Rename",
    icon: <Edit />,
    onClick: (toggleAnimation) => {
      alert("Edit");
      toggleAnimation();
    }
  },
  {
    text: "Delete",
    icon: <Delete />,
    onClick: () => alert("Delete")
  },
  {
    text: "Save To Favorite",
    icon: <Favorite />,
    onClick: () => alert("AddToFavorite")
  }
];

const toDay = moment().format("ll");
const itemCount = 0;

export default function Header() {
  return (
    <div className="div-flexColmn">
      <div className="div-flexRow">
        <React.Fragment>
          <EditText
            style={{
              fontWeight: "300",
              fontSize: "36px",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center"
            }}
            id="listTitle"
            name="textbox1"
            defaultValue="Моят Списък"
          />
        </React.Fragment>

        {/* bottom sheeet */}
        {/* <MuiThemeProvider>
          <BottomSheet
            items={itemsBottomSheet}
            startHidden={false}
            buttonElement={<MoreVert />}
          />
        </MuiThemeProvider> */}
      </div>
      <div className="div-flexRow">
        <p className="p-body2">{toDay}</p>
        <p
          style={{
            width: "88px"
          }}
        >
          {" "}
        </p>
        <p className="p-body2">{itemCount} items</p>
      </div>
      <div className="div-flexRow">
        <Avatar>
          <Add />
        </Avatar>
        <Avatar>OP</Avatar>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>
      <RadioSwitch />
    </div>
  );
}
