import React from "react";
import Cocktail from "./Cocktail";
import { v4 as uuid } from "uuid";
export default function CocktailList({ loading, colleges }) {
  if (loading) {
    return <h2 className="section-title">loading...</h2>;
  }
  if (colleges.length < 1) {
    return <h2 className="section-title">No Colleges found!!</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Colleges</h2>
      <div className="cocktails-center">
        {colleges.map((item, index) => {
          return <Cocktail {...item} key={uuid()} />;
        })}
      </div>
    </section>
  );
}
