import React from "react";
import { Link } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const options = ["Option 1", "Option 2", "Eption 2", "Eption 3"];
// const options = {blogs};

const ControllableStates = ({ blogs, title }) => {
  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="blog-list">
      <h5>Месни</h5>
      <h2>{title}</h2>
      {console.log({ blogs })}

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
        style={{ width: 300 }}
        renderInput={(params) => (
          <TextField {...params} label="Търси продукт" variant="outlined" />
        )}
      />
    </div>
  );
};
export default ControllableStates;
