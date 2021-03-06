import React from "react";
import { Link } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import Header from "./components/Header";
// import "react-edit-text/dist/index.css";
/**
 * Material Icons
 */
import Avatar from "@material-ui/core/Avatar";
import Add from "@material-ui/icons/Add";

export default function Glossary() {
  return (
    <div className="div-flexColmn">
      <Header />
      <div className="div-flexRow">
        <Avatar>
          <Add />
        </Avatar>
        <Avatar>OP</Avatar>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </div>

      <div className="content">
        <svg
          width="190"
          height="171"
          viewBox="0 0 190 171"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="95" cy="149.5" rx="95" ry="21.5" fill="#C4C4C4" />
          <path
            d="M147.25 31.4193C147.14 30.6188 146.435 30.1764 145.853 30.1278C145.272 30.0792 132.974 29.1726 132.974 29.1726C132.974 29.1726 124.433 20.7369 123.496 19.8034C122.558 18.87 120.726 19.1539 120.015 19.3623C119.91 19.393 118.149 19.9339 115.235 20.8303C112.5 16.5 110.5 14.5 106.5 13.5C103.5 13 101.752 13.4859 101.5 13.5C99.5001 5.5 93.0001 0.427086 89.4053 0.427086C68.7705 0.427086 58.912 26.0896 55.8208 39.1312C47.8029 41.603 42.1063 43.3599 41.3788 43.5875C36.9033 44.9839 36.7619 45.1246 36.1745 49.32C35.7311 52.4963 24.0204 142.595 24.0204 142.595L115.273 159.604L164.717 148.963C164.717 148.963 147.36 32.2198 147.25 31.4193ZM110.192 22.3826C107.9 23.0885 105.295 23.8902 102.471 24.7597C102.473 24.2188 102.476 23.6856 102.476 23.1038C102.476 18.0273 102.471 17.5 102.471 17.5C102.471 17.5 108.235 16.4366 110.192 22.3826ZM97.0581 19C97.0581 22.0203 97.0633 19.4096 97.0633 25.5359C97.0633 25.8492 97.0607 26.1356 97.0581 26.4259C92.0363 27.9732 86.5801 29.6534 81.111 31.3387C84.1817 19.549 96.0001 19 97.0581 19ZM89.0001 5.5C92.7436 5.93604 98.0358 14.2781 96.5001 14.5C88.5001 17 81.111 18 74.7897 33.2862C70.4145 34.634 66.1382 35.9511 62.1845 37.1697C65.6909 25.293 74.1789 5.5 89.0001 5.5Z"
            fill="#95BF46"
          />
          <path
            d="M145.853 30.1278C145.272 30.0792 132.974 29.1726 132.974 29.1726C132.974 29.1726 124.433 20.7369 123.496 19.8034C123.145 19.4556 122.672 19.2779 122.177 19.2012L115.278 159.603L164.717 148.963C164.717 148.963 147.36 32.2198 147.25 31.4193C147.14 30.6188 146.435 30.1764 145.853 30.1278Z"
            fill="#5E8E3E"
          />
          <path
            d="M139 140L133.5 29.5C137.333 29.6667 145.2 30 146 30C146.8 30 147.333 31.3333 147.5 32L165 149L139 140Z"
            fill="#507935"
          />
        </svg>
      </div>
      <div>
        <p>What would you like to buy?</p>
        <p>Your list is empty.</p>
        <div className="links">
          {/* ako e napisano taka -isprashta zaiavka kam servera
                <a href="/">Home</a>
                <a href="/create">New blog</a> */}
        </div>
      </div>
      <Link to={"/additem"} className="div-flexRow">
        <div style={{ margin: "0 0 24px 0" }}>
          <div className="inputMockup">
            <p className="pMock">Search Item </p>
          </div>
        </div>
      </Link>
    </div>
  );
}
