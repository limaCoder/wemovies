import { Container, MovieImage, MoviePrice, MovieTitle } from "./styles";

export function Movie() {
  return (
    <Container>
      <MovieImage src="img/viuva-negra.png" />
      <MovieTitle>Viúva Negra</MovieTitle>
      <MoviePrice>R$ 9,99</MoviePrice>
    </Container>
  );
}
