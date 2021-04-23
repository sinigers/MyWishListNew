import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useCallback } from "react";

export default function RadioSwitch() {
  //links to pages
  const history = useHistory();
  const handleGoToF = useCallback(() => history.push("/additem"), [history]);
  const handleGoToG = useCallback(() => history.push("/glossary"), [history]);

  return (
    <div>
      {/* <Link to="/additem">Търси</Link>
      <p
        style={{
          width: "84px"
        }}
      ></p>
      <Link className="linkTuggle" to="/glossary">
        Речник
      </Link> */}

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
            // checked="checked"
            onChange={handleGoToF}
          />
          <input
            type="radio"
            id="switchRight"
            name="switchPlan"
            value="Right"
            onChange={handleGoToG}
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
}

// export default Navbar;
