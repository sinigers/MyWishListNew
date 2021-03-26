import Search from "./Search";
import { Link } from "react-router-dom";
import useFetch from "../useFetch";

const AddItem = () => {
  const { error, isPending, data: blogs } = useFetch(
    "https://uhv3j.sse.codesandbox.io/blogs"
  );

  // const redMeat = blogs.filter(blog) => blog.type === "Месни");
  // console.log(redMeat)

  console.log(blogs);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <Search blogs={blogs} title="Търси" />}
    </div>
  );
};

export default AddItem;
