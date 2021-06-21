import React from "react";
import { useParams, Link } from "react-router-dom";

export default function SingleCocktail() {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [college, setCollege] = React.useState(null);
  React.useEffect(() => {
    setLoading(true);
    async function getCollege() {
      try {
        const response = await fetch(
          `http://universities.hipolabs.com/search?country=Ireland&name=${id}`
        );
        const collegeData = await response.json();
        if (collegeData.length > 0) {
          setCollege(collegeData[0]);
        } else {
          setCollege(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getCollege();
  }, [id]);
  if (loading) {
    return <h2 className="section-title">Loading...</h2>;
  }
  if (!college) {
    return <h2 className="section-title"> No college found </h2>;
  } else {
    const { name, web_pages, country } = college;
    return (
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to="/">
          Back Home
        </Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img
            src="https://tutorials.rxtrainees.radixweb.net/wp-content/uploads/2020/12/cropped-logo_2500X1875-270x270.jpg"
            height="250px"
            width="100px"
            alt="collegeLogo"
          />
          <div className="drink-info">
            <p>
              Name : <b>{name}</b>
            </p>
            {web_pages.map((page, index) => (
              <p key={"SingleLinkIndex" + index}>
                Link : <b>{page}</b>
              </p>
            ))}
            <p>
              country : <b>{country}</b>
            </p>
          </div>
        </div>
      </section>
    );
  }
}
