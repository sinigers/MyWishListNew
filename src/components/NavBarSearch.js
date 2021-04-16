import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  // function HomeButton() {
  //   const history = useHistory();

  //   function handleClick() {
  //     history.push("/glossary");

  return (
    <div>
      <Link to="/additem">Търси</Link>
      <p
        style={{
          width: "84px"
        }}
      ></p>
      <Link className="linkTuggle" to="/glossary">
        Речник
      </Link>

      {/* ako e napisano taka -isprashta zaiavka kam servera
                <a href="/">Home</a>
                <a href="/create">New blog</a> */}
      {/* toggle switch */}
      <div class="container">
        <div class="switches-container">
          <input
            type="radio"
            id="switchLeft"
            name="switchPlan"
            value="Left"
            checked="checked"
            // onClick={handleClick}
          />

          <input
            type="radio"
            id="switchRight"
            name="switchPlan"
            value="Right"
          />

          <label for="switchLeft">Търси</label>

          <label for="switchRight">Речник</label>

          <div class="switch-wrapper">
            <div class="switch">
              <div>Търси</div>
              <div>Речник</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
