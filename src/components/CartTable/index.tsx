import { useEffect, useState } from "react";

import { CartTableDesktop } from "./CartTableDesktop";
import { CartTableMobile } from "./CartTableMobile";

interface CartTableProps {
  image: string;
  title: string;
  price: string;
  subtotal: string;
  quantity: number;
  onDecreaseQuantity: () => void;
  onIncreaseQuantity: () => void;
  onRemove: () => void;
}

export function CartMoviesTable({
  image,
  title,
  price,
  subtotal,
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemove
}: CartTableProps) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth <= 650;

  if (isSmallScreen) {
    return (
      <CartTableMobile
        image={image}
        title={title}
        price={price}
        subtotal={subtotal}
        quantity={quantity}
        onDecreaseQuantity={onDecreaseQuantity}
        onIncreaseQuantity={onIncreaseQuantity}
        onRemove={onRemove}
      />
    );
  }

  return (
    <CartTableDesktop
      image={image}
      title={title}
      price={price}
      subtotal={subtotal}
      quantity={quantity}
      onDecreaseQuantity={onDecreaseQuantity}
      onIncreaseQuantity={onIncreaseQuantity}
      onRemove={onRemove}
    />
  );
}
