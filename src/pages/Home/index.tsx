import { useEffect, useState } from "react";

import { Container, MoviesListContainer } from "./styles";

import { api } from "../../services/api";

import { Movie } from "../../components/Movie";
import { MovieState } from "../../components/Movie/types";

export function Home() {
  const [movies, setMovies] = useState<MovieState[]>([]);

  useEffect(() => {
    async function getMovies() {
      const result = await api.get("/products");

      console.log(result.data);
      setMovies(result.data);
    }

    getMovies();
  }, []);

  return (
    <Container>
      <MoviesListContainer>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            image={movie.image}
            title={movie.title}
            price={new Intl.NumberFormat("pt-br", {
              style: "currency",
              currency: "BRL"
            }).format(movie.price)}
          />
        ))}
      </MoviesListContainer>
    </Container>
  );
}
