import React from "react";
import CocktailsList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getColleges() {
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=Ireland&name=${searchTerm}`
        );
        const colleges = await response.json();
        if (colleges) {
          const newColleges = colleges.map((item) => {
            const { web_pages, country, name } = item;
            return {
              name,
              web_pages,
              country,
            };
          });
          setCocktails(newColleges);
        } else {
          console.log("No Colleges Found");
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getColleges();
  }, [searchTerm]);

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailsList loading={loading} colleges={cocktails} />
    </main>
  );
}
