/* eslint-disable no-use-before-define */
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";

import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";

import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

const filter = createFilterOptions();

export default function FreeSoloCreateOptionDialog({ blogs }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("1");
  const [body, setBody] = useState("");
  const [unit, setUnit] = useState("");
  const [type, setType] = useState("други");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  const [value, setValue] = React.useState(null);
  const [open, toggleOpen] = React.useState(false);
  // const [unit, setunit] = React.useState("кг");
  // const [typе, setTypе] = React.useState("Други");
  // redux reduce
  const dispatch = useDispatch();
  const handleAddToList = () => {
    dispatch(actionCreators.addToList(value.title));
  };

  const handleClose = () => {
    // setDialogValue({
    //   title: "",
    //   quantity: "",
    //   unit: "",
    //   type: ""
    // });

    toggleOpen(false);
  };

  //submit new item
  const handleSubmit = (e) => {
    e.preventDefault(); //predotvratiava refresh pri natiskane na butona
    const blog = { title, body, quantity, unit, type }; //suzdava obekt s keys title, body, type

    setIsPending(true);

    fetch("https://uhv3j.sse.codesandbox.io/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(blog) //obrushta obekt w json string
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
      // history.go(-1);
      history.push("/"); //sled addin go to home page
    });
  };
  const handleClear = () => {
    dispatch(actionCreators.clearItems());
  };

  return (
    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === "string") {
            setTitle(event.target.newValue);
            // timeout to avoid instant validation of the dialog's form.
            setTimeout(() => {
              toggleOpen(true);
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setTitle(newValue.inputValue);
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== "") {
            filtered.push({
              inputValue: params.inputValue,
              title: `Създай Нов: "${params.inputValue}"`
            });
          }
          console.log(params.inputValue);
          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={blogs}
        getOptionLabel={(option) => {
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(option) => option.title}
        style={{ width: 300 }}
        freeSolo
        renderInput={(params) => (
          <TextField {...params} label="Търси" variant="outlined" />
        )}
      />

      <Button className="button" variant="text" onClick={handleAddToList}>
        Add
      </Button>
      <Button className="button" variant="outline-dark" onClick={handleClear}>
        Clear
      </Button>
      {/* create new item */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <h5>НОВ ПРОДУКТ</h5>
        <p>Липсва ли в предложенията?</p>
        <p>Моля, добави!</p>
        <div className="create">
          <form onSubmit={handleSubmit}>
            <label>Име:</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {console.log(title)}
            <label>Количество:</label>
            <input
              required
              value={quantity}
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
            />
            <label>Мерна Единица</label>
            <select value={unit} onChange={(e) => setUnit(e.target.value)}>
              <option value="кг.">кг</option>
              <option value="бр.">бр</option>
            </select>
            <label>Тип:</label>
            <select value={type} onChange={(e) => setType(e.target.value)}>
              <option value="Други">Други</option>
              <option value="Плодове-Зеленчуци">Плодове и Зеленчуци</option>
              <option value="Млечни-яйца">Млечни и яйца</option>
              <option value="Месни">Месни</option>
              <option value="Тестени">Тестени</option>
              <option value="Сладко">Сладко</option>
              <option value="Замразени-Консерви">Замразени-Консерви</option>
              <option value="Ядки и Джънк">Ядки и Джънк</option>
              <option value="Подправки">Подправки</option>
              <option value="Мазнини">Мазнини</option>
              <option value="Алкохол-Кафе">Алкохол и Кафе</option>
              <option value="Безалкохолни-Напитки">Безалкохолни напитки</option>
              <option value="Зърнени">Зърнени</option>
              <option value="Домашни-Потреби">Домашни-Потреби</option>
              <option value="Лекарства">Лекарства</option>
            </select>
            {!isPending && <button>Създай</button>}
            {isPending && <button disabled>Добавяне...</button>}
            <h6 onClick={handleClose}>Откажи</h6>
          </form>
        </div>
      </Dialog>
    </React.Fragment>
  );
}
