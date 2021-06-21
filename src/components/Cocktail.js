import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({ name, web_pages, country }) => {
  return (
    <article className="cocktail">
      <img
        src="https://tutorials.rxtrainees.radixweb.net/wp-content/uploads/2020/12/cropped-logo_2500X1875-270x270.jpg"
        height="250px"
        width="100px"
        alt="collegeLogo"
      />
      <h3>{name}</h3>
      <h4>{country}</h4>
      {web_pages.map((page, index) => (
        <a
          href={page}
          key={"college" + index}
          style={{ paddingBottom: "1rem" }}
        >
          <b>Link #{parseInt(index + 1)}</b>
        </a>
      ))}
      <Link to={`/cocktail/${name}`} className="btn btn-primary btn-details">
        Details
      </Link>
    </article>
  );
};

export default Cocktail;
