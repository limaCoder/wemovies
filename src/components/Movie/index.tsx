import { useState } from "react";
import { Button } from "../Button";

import {
  CartAddMoreIcon,
  Container,
  IconWrapper,
  MovieImage,
  MoviePrice,
  MovieQuantity,
  MovieTitle
} from "./styles";

import { MovieProps } from "./types";

export function Movie({ image, title, price }: MovieProps) {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  function handleAddMovie() {
    setIsButtonPressed(true);
  }

  return (
    <Container>
      <MovieImage src={image} />
      <MovieTitle>{title}</MovieTitle>
      <MoviePrice>{price}</MoviePrice>
      <Button
        onClick={() => handleAddMovie()}
        color={!isButtonPressed ? "primary" : "secondary"}
        size="large"
        icon={
          <IconWrapper>
            <CartAddMoreIcon src="icons/cart_add_more_icon.svg" />
            <MovieQuantity>0</MovieQuantity>
          </IconWrapper>
        }
      >
        {!isButtonPressed ? "Adicionar ao carrinho" : "Item adicionado"}
      </Button>
    </Container>
  );
}
