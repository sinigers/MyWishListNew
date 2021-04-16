// import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Title } from "@material-ui/icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

let options = ["Option 1", "Option 2"];

export default function ControllableStates({ blogs, title }) {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  // redux reduce
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(actionCreators.addToList(value));
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  // add blog titles to options from Blogs
  options = blogs.map((blog) => {
    return blog.title;
  });

  return (
    <div>
      {/* <h2>{title}</h2> */}

      {/* <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}
      <br />

      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          if (newValue === "") {
          } else {
            dispatch(actionCreators.addToList(newValue));
          }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
          // if (inputValue !== newValue) {
          //   dispatch(actionCreators.addToList(inputValue));
          // }
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Търси" variant="outlined" />
        )}
      />
      <Button className="button" variant="outline-dark" onClick={handleSubmit}>
        Add
      </Button>
      <Button className="button" variant="outline-dark" onClick={handleClear}>
        Clear
      </Button>
    </div>
  );
}
