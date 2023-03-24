import {
  CartMovieContent,
  CartMovieDecreaseQuantity,
  CartMovieImage,
  CartMovieIncreaseQuantity,
  CartMoviePrice,
  CartMovieQuantityActions,
  CartMovieQuantityInput,
  CartMovieSubtotal,
  CartMovieTitle,
  CartMovieTrashIcon,
  CartTable,
  CartTableHead
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

export function CartTableDesktop({
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
          <td width={137}>
            <CartMovieImage src={image} />
          </td>
          <td width={253}>
            <CartMovieContent>
              <CartMovieTitle>{title}</CartMovieTitle>
              <CartMoviePrice>{price}</CartMoviePrice>
            </CartMovieContent>
          </td>
          <td>
            <CartMovieQuantityActions>
              <button onClick={onDecreaseQuantity}>
                <CartMovieDecreaseQuantity src="icons/minus_icon.svg" />
              </button>
              <CartMovieQuantityInput type="number" min="1" value={quantity} />
              <button onClick={onIncreaseQuantity}>
                <CartMovieIncreaseQuantity src="icons/plus_icon.svg" />
              </button>
            </CartMovieQuantityActions>
          </td>
          <td>
            <CartMovieSubtotal>{subtotal}</CartMovieSubtotal>
          </td>
          <td>
            <button onClick={onRemove}>
              <CartMovieTrashIcon src="icons/trash_icon.svg" />
            </button>
          </td>
        </tr>
      </tbody>
    </CartTable>
  );
}
