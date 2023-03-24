import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import {
  Container,
  ContentContainer,
  ContentColumn,
  ContentTitle,
  ContentImage,
  CartTable,
  CartTableHead,
  CartTableData,
  CartMovieImage,
  CartMovieContent,
  CartMovieTitle,
  CartMoviePrice,
  CartMovieSubtotal,
  CartMovieTrashIcon,
  CartMovieQuantityActions,
  CartMovieDecreaseQuantity,
  CartMovieQuantityInput,
  CartMovieIncreaseQuantity,
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
        <CartTable>
          <thead>
            <tr>
              <CartTableHead>Produto</CartTableHead>
              <CartTableHead></CartTableHead>
              <CartTableHead>Qtd</CartTableHead>
              <CartTableHead>Subtotal</CartTableHead>
              <CartTableHead></CartTableHead>
            </tr>
          </thead>

          <tbody>
            <tr>
              <CartTableData width={137}>
                <CartMovieImage src="img/viuva-negra.png" />
              </CartTableData>
              <CartTableData>
                <CartMovieContent>
                  <CartMovieTitle>Viúva Negra</CartMovieTitle>
                  <CartMoviePrice>R$ 29,99</CartMoviePrice>
                </CartMovieContent>
              </CartTableData>
              <CartTableData>
                <CartMovieQuantityActions>
                  <button>
                    <CartMovieDecreaseQuantity src="icons/minus_icon.svg" />
                  </button>
                  <CartMovieQuantityInput type="number" min="1" value={1} />
                  <button>
                    <CartMovieIncreaseQuantity src="icons/plus_icon.svg" />
                  </button>
                </CartMovieQuantityActions>
              </CartTableData>
              <CartTableData>
                <CartMovieSubtotal>R$ 29,99</CartMovieSubtotal>
              </CartTableData>
              <CartTableData>
                <button>
                  <CartMovieTrashIcon src="icons/trash_icon.svg" />
                </button>
              </CartTableData>
            </tr>
          </tbody>
        </CartTable>

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
