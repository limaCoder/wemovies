import { useState } from "react";
import { Link } from "react-router-dom";

import { Button } from "../../components/Button";
import { CartMoviesTable } from "../../components/CartTable";

import {
  Container,
  ContentContainer,
  ContentColumn,
  ContentTitle,
  ContentImage,
  CartFinalRow,
  CartTotalTitle,
  CartTotalPrice,
  CartTotal,
  HorizontalLine
} from "./styles";

export function Cart() {
  const [isAvailableMovies] = useState(true);

  if (!isAvailableMovies) {
    return (
      <Container>
        <ContentContainer>
          <ContentColumn>
            <ContentTitle>Parece que não há nada por aqui :(</ContentTitle>
            <ContentImage src="img/fallback_products.svg" />
            <Link to="/sucessful-purchase">
              <Button color="primary" size="medium">
                Voltar
              </Button>
            </Link>
          </ContentColumn>
        </ContentContainer>
      </Container>
    );
  }

  return (
    <Container>
      <ContentContainer>
        <CartMoviesTable />

        <HorizontalLine />

        <CartFinalRow>
          <Button size="medium">Finalizar Pedido</Button>
          <CartTotal>
            <CartTotalTitle>TOTAL</CartTotalTitle>
            <CartTotalPrice>R$ 29,90</CartTotalPrice>
          </CartTotal>
        </CartFinalRow>
      </ContentContainer>
    </Container>
  );
}
