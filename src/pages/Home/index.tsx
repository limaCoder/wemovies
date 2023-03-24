import { useEffect, useState } from "react";

import { Container, MoviesListContainer } from "./styles";

import { api } from "../../services/api";

import { Movie } from "../../components/Movie";
import { MovieModel } from "../../components/Movie/types";

import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

export function Home() {
  const [movies, setMovies] = useState<MovieModel[]>([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const result = await api.get("/products");
        setMovies(result.data);
      } catch (error) {
        const notifyError = () =>
          toast.error("Houve erro na busca de filmes 😥", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
          });

        notifyError();
      }
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
          <Movie key={movie.id} movie={movie} />
        ))}
      </MoviesListContainer>
    </Container>
  );
}
