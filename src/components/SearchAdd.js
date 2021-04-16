/* eslint-disable no-use-before-define */
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import Autocomplete, {
  createFilterOptions
} from "@material-ui/lab/Autocomplete";

import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

const filter = createFilterOptions();
const units = [
  { value: "кг", label: "кг." },
  { value: "бр", label: "бр." }
];
// const types = [
//   { value: "Други", label: "Други" },
//   { value: "Плодове-Зеленчуци", label: "Плодове-Зеленчуци" },
//   { value: "Млечни-яйца", label: "Млечни-яйца" },
//   { value: "Месни", label: "Месни" },
//   { value: "Тестени", label: "Тестени" },
//   { value: "Сладко", label: "Сладко" },
//   { value: "Замразени-Консерви", label: "Замразени-Консерви" },
//   { value: "Ядки-и-Джънк", label: "Ядки-и-Джънк" },
//   { value: "Подправки", label: "Подправки" },
//   { value: "Мазнини", label: "Мазнини" },
//   { value: "Алкохол-Кафе", label: "Алкохол-Кафе" },
//   { value: "Безалкохолни-Напитки", label: "Безалкохолни-Напитки" },
//   { value: "Зърнени", label: "Зърнени" },
//   { value: "Домашни-Потреби", label: "Домашни-Потреби" },
//   { value: "Лекарства", label: "Лекарства" }
// ];

export default function FreeSoloCreateOptionDialog({ blogs }) {
  const [title, setTitle] = useState("");

  const [body, setBody] = useState("");
  const [quantity, setQuantity] = useState("1");
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
    dispatch(actionCreators.addToList(value));
  };

  const handleClose = () => {
    setDialogValue({
      title: "",
      quantity: "",
      unit: "",
      type: ""
    });

    toggleOpen(false);
  };

  // const [dialogValue, setDialogValue] = React.useState({
  //   title: "",
  //   quantity: "",
  //   unit: "",
  //   type: ""
  // });
  //submit new item
  const handleSubmit = (e) => {
    e.preventDefault(); //predotvratiava refresh pri nariskane na butona
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

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setValue({
  //     title: dialogValue.title,
  //     quantity: parseInt(dialogValue.quantity, 10)
  //   });

  //   handleClose();
  // };

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
              setDialogValue({
                title: newValue,
                quantity: ""
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);

            // setDialogValue({
            //   title: newValue.inputValue,
            //   quantity: "1",
            //   unit: "кг",
            //   type: "Други"
            // });
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

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={blogs}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === "string") {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
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
      <Button
        className="button"
        variant="outline-dark"
        onClick={handleAddToList}
      >
        Add
      </Button>
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

              // value={dialogValue.title}
              // onChange={(event) =>
              //   setDialogValue({ ...dialogValue, title: event.target.value })
              // }
            />
            {console.log(title)}
            {/* <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        /> */}

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
            {!isPending && <button>Добави</button>}
            {isPending && <button disabled>Добавяне...</button>}
            <h6 onClick={handleClose}>Откажи</h6>
            {/* <p>{title}</p>
        <p>{body}</p>
        <p>{type}</p> */}
          </form>
        </div>
        {/* <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">НОВ ПРОДУКТ</DialogTitle>
          <DialogContent>
            <DialogContentText>Липсва ли в предложенията?</DialogContentText>
            <DialogContentText>Моля, добави!</DialogContentText>
            <div className="div-flexColmn">
              <TextField
                autoFocus
                margin="dense"
                id="name"
                value={dialogValue.title}
                onChange={(event) =>
                  setDialogValue({ ...dialogValue, title: event.target.value })
                }
                label="име"
                type="text"
              />
              <div>
                <TextField
                  margin="dense"
                  id=""
                  quant
                  value={dialogValue.quantity}
                  onChange={(event) =>
                    setDialogValue({
                      ...dialogValue,
                      quantity: event.target.value
                    })
                  }
                  label="количество"
                  type="number"
                />

                <TextField
                  id="standard-select-unit"
                  margin="dense"
                  select
                  label="единица"
                  value={dialogValue.unit}
                  onChange={(event) =>
                    setDialogValue({ ...dialogValue, unit: event.target.value })
                  }
                  // helperText="Please select your unit"
                >
                  {units.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
              <TextField
                id="standard-select-category"
                margin="dense"
                select
                label="категория"
                value={dialogValue.typеs}
                onChange={(event) =>
                  setDialogValue({ ...dialogValue, typе: event.target.value })
                }
                // helperText="Please select your unit"
              >
                {types.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              ОТКАЖИ
            </Button>
            <Button type="submit" color="primary">
              Добави
            </Button>
          </DialogActions>
        </form> */}
      </Dialog>
    </React.Fragment>
  );
}
