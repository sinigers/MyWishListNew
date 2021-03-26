import React from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Title } from "@material-ui/icons";
import { Link } from "react-router-dom";

let options = ["Option 1", "Option 2"];

export default function ControllableStates({ blogs, title }) {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  options = blogs.map((blog) => {
    return blog.title;
  });

  return (
    <div>
      <h2>{title}</h2>

      <div>{`value: ${value !== null ? `'${value}'` : "null"}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div>
      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 360 }}
        renderInput={(params) => (
          <TextField {...params} label="Търси" variant="outlined" />
        )}
      />
    </div>
  );
}
