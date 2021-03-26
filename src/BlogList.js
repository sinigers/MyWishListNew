import { Link } from "react-router-dom";

// accordeon
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const BlogList = ({ blogs, title }) => {
  return (
    <div className="blog-list">
      <h2> {title} </h2>

      {console.log({ blogs })}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Плодове и Зеленчуци</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Плодове-Зеленчуци")
              .map((filteredItem) => (
                <li>{filteredItem.title}</li>
              ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Месни</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Месни")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
              ))}
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* blogs - sorted titels by blogs.type Месни */}
      {/* <h5>Месни</h5> */}
      {/* <div> */}
      {/* filter and groups by key value  */}
      {/* {blogs
          .filter((item) => item.type === "Месни")
          .map((filteredItem) => (
            <li>{filteredItem.title}</li>
          ))}
      </div> */}

      {/* all blogs items - dysplay titles and types */}
      {/* {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2> {blog.title} </h2>
            <p>{blog.type} </p>
          </Link>
        </div>
      ))} */}
    </div>
  );
};

export default BlogList;
