import Search from "./Search";
import SearchAdd from "./SearchAdd";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";
import ShoppingList from "./ShoppingList";

const AddItem = () => {
  const { error, isPending, data: blogs } = useFetch(
    "https://uhv3j.sse.codesandbox.io/blogs"
  );

  // const redMeat = blogs.filter(blog) => blog.type === "Месни");
  // console.log(redMeat)

  console.log(blogs);

  return (
    <div className="home">
      <div className="div-flexRow">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <SearchAdd blogs={blogs} title="Търси" />}
      </div>
      <ShoppingList />
    </div>
  );
};

export default AddItem;
