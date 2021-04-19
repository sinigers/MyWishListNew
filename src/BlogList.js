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
          <Typography>Плодове-Зеленчуци</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Плодове-Зеленчуци")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Млечни-яйца</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Млечни-яйца")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Тестени</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Тестени")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Сладко</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Сладко")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Замразени-Консерви</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Замразени-Консерви")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Ядки и Джънк</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Ядки и Джънк")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Подправки</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Подправки")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Мазнини</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Мазнини")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Алкохол-Кафе</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Алкохол-Кафе")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Безалкохолни-Напитки</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Безалкохолни-Напитки")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Зърнени</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Зърнени")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Домашни-Потреби</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Домашни-Потреби")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
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
          <Typography>Лекарства</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* filter and groups by key value  */}
            {blogs
              .filter((item) => item.type === "Лекарства")
              .map((filteredItem) => (
                <div className="blog-preview">{filteredItem.title}</div>
              ))}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default BlogList;
