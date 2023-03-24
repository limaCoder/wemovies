import { useState } from "react";
import { Button } from "../Button";

import { useCart } from "../../context/CartContext";

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

import { formatCurrency } from "../../utils/formatCurrency";

export function Movie({ movie }: MovieProps) {
  const [isButtonPressed, setIsButtonPressed] = useState(false);
  const { addMovieToCart, cartItems } = useCart();

  const movieExistsOnCart = cartItems.filter((item) => item.id === movie.id);

  function renderQuantity() {
    return movieExistsOnCart[0]?.quantity?.toString() ?? "0";
  }

  function handleAddMovie() {
    setIsButtonPressed(true);
    addMovieToCart(movie);
  }

  return (
    <Container>
      <MovieImage src={movie.image} />
      <MovieTitle>{movie.title}</MovieTitle>
      <MoviePrice>{formatCurrency(movie.price)}</MoviePrice>
      <Button
        onClick={() => handleAddMovie()}
        color={!isButtonPressed ? "primary" : "secondary"}
        size="large"
        icon={
          <IconWrapper>
            <CartAddMoreIcon src="icons/cart_add_more_icon.svg" />
            <MovieQuantity>{renderQuantity()}</MovieQuantity>
          </IconWrapper>
        }
      >
        {!isButtonPressed ? "Adicionar ao carrinho" : "Item adicionado"}
      </Button>
    </Container>
  );
}
