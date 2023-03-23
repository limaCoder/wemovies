import { Link } from "react-router-dom";

import {
  CartIcon,
  CartItens,
  CartTitle,
  Container,
  HeaderCart,
  HeaderCartTextContent,
  HeaderLogo,
  MenuContainer
} from "./styles";

export function Header() {
  return (
    <Container>
      <MenuContainer>
        <Link to="/">
          <HeaderLogo src="img/wemovies_logo.svg" />
        </Link>

        <Link to="/cart">
          <HeaderCart>
            <HeaderCartTextContent>
              <CartTitle>Meu Carrinho</CartTitle>
              <CartItens>0 itens</CartItens>
            </HeaderCartTextContent>
            <CartIcon src="icons/cart_icon.svg" />
          </HeaderCart>
        </Link>
      </MenuContainer>
    </Container>
  );
}
