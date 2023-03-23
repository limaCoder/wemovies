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
        <HeaderLogo src="img/wemovies_logo.svg" />

        <HeaderCart>
          <HeaderCartTextContent>
            <CartTitle>Meu Carrinho</CartTitle>
            <CartItens>0 itens</CartItens>
          </HeaderCartTextContent>
          <CartIcon src="icons/cart_icon.svg" />
        </HeaderCart>
      </MenuContainer>
    </Container>
  );
}
