import { Container, MovieImage, MoviePrice, MovieTitle } from "./styles";
import { MovieProps } from "./types";

export function Movie({ image, title, price }: MovieProps) {
  return (
    <Container>
      <MovieImage src={image} />
      <MovieTitle>{title}</MovieTitle>
      <MoviePrice>R$ {price}</MoviePrice>
    </Container>
  );
}
