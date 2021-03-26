import { useState } from "react";
import { useHistory } from "react-router-dom";

import options from "./components/data";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [type, setType] = useState("други");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

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
  return (
    <div className="create">
      <h2>Добави продукт</h2>
      <form onSubmit={handleSubmit}>
        <label>Име:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
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
          onChange={(e) => setQuantity(e.target.value)}
        />
        <label>Мерна Единица</label>
        <select value={unit} onChange={(e) => setUnit(e.target.value)}>
          <option value="кг">кг</option>
          <option value="бр">бр</option>
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
        <p>{title}</p>
        <p>{body}</p>
        <p>{type}</p>
      </form>
    </div>
  );
};

export default Create;
