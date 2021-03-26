import BlogList from "./BlogList";
import AddItem from "./components/AddItem";
import useFetch from "./useFetch";

const Glossary = () => {
  const { error, isPending, data: blogs } = useFetch(
    "https://uhv3j.sse.codesandbox.io/blogs"
  );

  // const redMeat = blogs.filter(blog) => blog.type === "Месни");
  // console.log(redMeat)

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="Речник" />}
      {/* {blogs && <AddItem blogs={blogs} title="Търси" />} */}
    </div>
  );
};

export default Glossary;
