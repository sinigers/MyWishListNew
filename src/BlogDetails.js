import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch(
    "https://uhv3j.sse.codesandbox.io/blogs/" + id
  );
  const history = useHistory();
  const handleClick = () => {
    fetch("https://uhv3j.sse.codesandbox.io/blogs" + blog.id, {
      method: "DELETE"
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>сектор: {blog.type}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>delete</button>
        </article>
      )}
      <div>asdadad</div>
    </div>
  );
};

export default BlogDetails;
