import { useEffect, useState } from "react";
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
  HorizontalLine,
  ContentTableContainer
} from "./styles";

export function Cart() {
  const [isAvailableMovies] = useState(true);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth <= 650;

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
      <ContentTableContainer>
        <CartMoviesTable />

        <div>
          <HorizontalLine />
          <CartFinalRow>
            <Button size={isSmallScreen ? "extra-large" : "medium"}>
              Finalizar Pedido
            </Button>
            <CartTotal>
              <CartTotalTitle>TOTAL</CartTotalTitle>
              <CartTotalPrice>R$ 29,90</CartTotalPrice>
            </CartTotal>
          </CartFinalRow>
        </div>
      </ContentTableContainer>
    </Container>
  );
}
