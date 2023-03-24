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

export function CartTableDesktop() {
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
            <CartMovieImage src="img/viuva-negra.png" />
          </td>
          <td>
            <CartMovieContent>
              <CartMovieTitle>Viúva Negra</CartMovieTitle>
              <CartMoviePrice>R$ 29,99</CartMoviePrice>
            </CartMovieContent>
          </td>
          <td>
            <CartMovieQuantityActions>
              <button>
                <CartMovieDecreaseQuantity src="icons/minus_icon.svg" />
              </button>
              <CartMovieQuantityInput type="number" min="1" value={1} />
              <button>
                <CartMovieIncreaseQuantity src="icons/plus_icon.svg" />
              </button>
            </CartMovieQuantityActions>
          </td>
          <td>
            <CartMovieSubtotal>R$ 29,99</CartMovieSubtotal>
          </td>
          <td>
            <button>
              <CartMovieTrashIcon src="icons/trash_icon.svg" />
            </button>
          </td>
        </tr>
      </tbody>
    </CartTable>
  );
}
