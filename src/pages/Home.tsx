import { useEffect, useState } from "react";
const Home = () =>{
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const [peliculas, setpeliculas] = useState<any[]>([]);
    const obtenerDatos = async () => {
      const url =
        "https://api.themoviedb.org/3/trending/all/week?api_key=418ccd7d38426839d870ae6120a19fa6";
      const res = await fetch(url);
      const data = await res.json();
      setpeliculas(data.results);
    };

    // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
    useEffect(() =>{
        obtenerDatos()
    }, [])
    return  <>
    {peliculas.map((pelicula) => (
      // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
      <div>
        {" "}
        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
        <img
          width={"250"}
          alt={pelicula.name}
          src={
            // biome-ignore lint/style/useTemplate: <explanation>
            "https://image.tmdb.org/t/p/w500" + pelicula.poster_path
          }
        />
        <p key={pelicula.id}>{pelicula.name}</p>
      </div>
    ))}
  </>
}

export default Home;