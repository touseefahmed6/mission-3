import React from "react";

export default function ProfileInfo() {
  return (
    <div
      className="m-0 card text-center  border-top-0"
      style={{ width: "18rem" }}
    >
      <ul className="list-group list-group-flush mt-3 border-0 bg-light">
        <li className="list-group-item border-0">
          <i className="bi bi-calendar3 "> </i>
          April 02, 2004
        </li>
        <li className="list-group-item border-0">
          <i className="bi bi-geo-alt "> </i>
          Karachi, Pakistan
        </li>
        <li className="list-group-item border-0">
          <i className="bi bi-envelope "> </i>
          touseef@mail.com
        </li>
        <li className="list-group-item border-0">
          <i className="bi bi-phone "> </i>
          +92-3173098212
        </li>
        <li className="list-group-item border-0">
          <i className="bi bi-skype d-inline"> </i>
          touseefahmed66
        </li>
      </ul>
      <a href="/" className="btn btn-primary  mt-3 rounded border-0">
        <i className="bi bi-download"></i> Download CV
      </a>
    </div>
  );
}
