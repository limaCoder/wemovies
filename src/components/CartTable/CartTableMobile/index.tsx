import {
  CartMovieColumnMobile,
  CartMovieDecreaseQuantity,
  CartMovieImageMobile,
  CartMovieIncreaseQuantity,
  CartMoviePrice,
  CartMovieProductMobile,
  CartMovieQuantityActions,
  CartMovieQuantityInput,
  CartMovieRowMobile,
  CartMovieSubtotal,
  CartMovieSubtotalTitleMobile,
  CartMovieTitle,
  CartMovieTrashIcon
} from "../styles";

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

export function CartTableMobile({
  image,
  title,
  price,
  subtotal,
  quantity,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemove
}: CartTableProps) {
  return (
    <CartMovieProductMobile>
      <CartMovieColumnMobile>
        <CartMovieImageMobile src={image} />
      </CartMovieColumnMobile>
      <CartMovieColumnMobile>
        <CartMovieTitle>{title}</CartMovieTitle>
        <CartMovieQuantityActions>
          <button onClick={onDecreaseQuantity}>
            <CartMovieDecreaseQuantity src="icons/minus_icon.svg" />
          </button>
          <CartMovieQuantityInput type="number" min="1" value={quantity} />
          <button onClick={onIncreaseQuantity}>
            <CartMovieIncreaseQuantity src="icons/plus_icon.svg" />
          </button>
        </CartMovieQuantityActions>
      </CartMovieColumnMobile>
      <CartMovieColumnMobile>
        <CartMovieRowMobile>
          <CartMoviePrice>{price}</CartMoviePrice>
          <button onClick={onRemove}>
            <CartMovieTrashIcon src="icons/trash_icon.svg" />
          </button>
        </CartMovieRowMobile>
        <CartMovieSubtotalTitleMobile>Subtotal</CartMovieSubtotalTitleMobile>
        <CartMovieSubtotal>{subtotal}</CartMovieSubtotal>
      </CartMovieColumnMobile>
    </CartMovieProductMobile>
  );
}
