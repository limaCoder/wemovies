import { useEffect, useState } from "react";

import { Container, MoviesListContainer } from "./styles";

import { api } from "../../services/api";

import { Movie } from "../../components/Movie";
import { MovieState } from "../../components/Movie/types";
import { ClipLoader } from "react-spinners";

export function Home() {
  const [movies, setMovies] = useState<MovieState[]>([]);

  useEffect(() => {
    async function getMovies() {
      const result = await api.get("/products");
      setMovies(result.data);
    }

    getMovies();
  }, []);

  if (!movies.length) {
    return (
      <Container>
        <ClipLoader color="#E6E6E6" />
      </Container>
    );
  }

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
