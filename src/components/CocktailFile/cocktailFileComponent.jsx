import React, { useEffect, useState } from "react";
import LoadingComponent from "../Loading/loadingComponent";

const CocktailFileComponent = () => {
    const [result, setResults] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            getDetailsCocktail();
        }, 1000);
        setLoading(false)
    }, [loading, result, error]);

  const getDetailsCocktail = () => {
    const idUrl = window.location.pathname.split('/')[2];

    fetch(`https://the-cocktail-db.p.rapidapi.com/lookup.php?i=${idUrl}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "78d63c1373msh8833585cf039d7cp1a877djsn5d2601f5d3b7"
      }
    })
    .then(response => {
        return response.json();
      })
    .then(results => {
        const result = results["drinks"];
        console.log(result);
        setResults(result);
    })
    .catch(err => {
        setError(true)
    });
  };

  return (
    <div className="container">
        {loading ? <LoadingComponent />
         :<h1>{result.strDrink}</h1>
        }
        {error ? <div> Error, try again </div> : ''}
    </div>

  );
};

export default CocktailFileComponent;
