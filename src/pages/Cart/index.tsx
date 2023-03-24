import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { Button } from "../../components/Button";
import { CartMoviesTable } from "../../components/CartTable";

import { useCart } from "../../context/CartContext";

import { formatCurrency } from "../../utils/formatCurrency";

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
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const {
    quantityItems,
    cartItems,
    removeMovieFromCart,
    increaseQuantity,
    decreaseQuantity,
    finishPurchase
  } = useCart();

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth <= 650;

  function multiply(a: number, b: number) {
    return a * b;
  }

  const total = cartItems.reduce((sumTotal, item) => {
    return (sumTotal += (item.quantity ? item.quantity : 0) * item.price);
  }, 0);

  function handleFinishPurchase() {
    navigate("/sucessful-purchase");
    finishPurchase();

    const notifySucess = () =>
      toast.success("Hoje tem maratona 😎", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        bodyStyle: {
          fontSize: 16
        }
      });

    notifySucess();
  }

  if (quantityItems === 0) {
    return (
      <Container>
        <ContentContainer>
          <ContentColumn>
            <ContentTitle>Parece que não há nada por aqui :(</ContentTitle>
            <ContentImage src="img/fallback_products.svg" />
            <Link to="/">
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
        {cartItems.map((item) => (
          <CartMoviesTable
            key={item.id}
            title={item.title}
            image={item.image}
            price={formatCurrency(item.price)}
            subtotal={formatCurrency(
              multiply(Number(item.quantity), item.price)
            )}
            quantity={item.quantity}
            onDecreaseQuantity={() => decreaseQuantity(item)}
            onIncreaseQuantity={() => increaseQuantity(item)}
            onRemove={() => removeMovieFromCart(item)}
          />
        ))}

        <div>
          <HorizontalLine />
          <CartFinalRow>
            <Button
              onClick={() => handleFinishPurchase()}
              size={isSmallScreen ? "extra-large" : "medium"}
            >
              Finalizar Pedido
            </Button>
            <CartTotal>
              <CartTotalTitle>TOTAL</CartTotalTitle>
              <CartTotalPrice>{formatCurrency(total)}</CartTotalPrice>
            </CartTotal>
          </CartFinalRow>
        </div>
      </ContentTableContainer>
    </Container>
  );
}
