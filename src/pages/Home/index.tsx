import { Movie } from "../../components/Movie";
import { Container, MoviesListContainer } from "./styles";

export function Home() {
  return (
    <Container>
      <MoviesListContainer>
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </MoviesListContainer>
    </Container>
  );
}
