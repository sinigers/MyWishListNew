import Navbar from "./Navbar";
import BottomNav from "./components/BottomNav";
import Home from "./Home";
import AddItem from "./components/AddItem";
import NavBarSearch from "./components/NavBarSearch";
import Glossary from "./Glossary";
import Create from "./Create";

import BlogDetails from "./BlogDetails";

import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound404";
// import { Provider } from "react-redux";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <NavBarSearch />
        <div className="content">
          <Switch>
            <Route exact path="/">
              {" "}
              {/* tochno/palno sywpadenie na putia */}
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/glossary">
              <Glossary />
            </Route>
            <Route path="/additem">
              <AddItem />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="*">
              {" "}
              {/* *kata hvashta vsichki ostanli sluchai. triabva da e naj-dolu- sled nego ne se izpulniava nishto */}
              <NotFound />
            </Route>
          </Switch>

          <BottomNav />
        </div>
      </div>
    </Router>
  );
}

export default App;
