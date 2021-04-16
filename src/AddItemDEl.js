import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

export default function Input() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInputChange = (event) => {
    return setInput(event.target.value);
  };

  const handleSubmit = () => {
    if (input !== "") {
      dispatch(actionCreators.addToList(input));
      setInput("");
    } else {
    }
  };

  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <div>
      <input
        type="text"
        className="input"
        placeholder="Add product..."
        value={input}
        name="firstName"
        onChange={handleInputChange}
        autoComplete="off"
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
