import React from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = React.useRef("");

  function handleSubmit(e) {
    e.preventDefault();
  }
  const searchCollege = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <>
      <section className="section">
        <h2 className="section-title">Search Colleges</h2>
        <form className="form search-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name">Search your college</label>
            <input
              placeholder="Search college"
              name="name"
              id="name"
              type="text"
              onChange={searchCollege}
              ref={searchValue}
            />
          </div>
        </form>{" "}
      </section>
    </>
  );
}
