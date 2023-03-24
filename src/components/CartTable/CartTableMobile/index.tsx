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

export function CartTableMobile() {
  return (
    <CartMovieProductMobile>
      <CartMovieColumnMobile>
        <CartMovieImageMobile src="img/viuva-negra.png" />
      </CartMovieColumnMobile>
      <CartMovieColumnMobile>
        <CartMovieTitle>Viúva Negra</CartMovieTitle>
        <CartMovieQuantityActions>
          <button>
            <CartMovieDecreaseQuantity src="icons/minus_icon.svg" />
          </button>
          <CartMovieQuantityInput type="number" min="1" value={1} />
          <button>
            <CartMovieIncreaseQuantity src="icons/plus_icon.svg" />
          </button>
        </CartMovieQuantityActions>
      </CartMovieColumnMobile>
      <CartMovieColumnMobile>
        <CartMovieRowMobile>
          <CartMoviePrice>R$ 29,99</CartMoviePrice>
          <button>
            <CartMovieTrashIcon src="icons/trash_icon.svg" />
          </button>
        </CartMovieRowMobile>
        <CartMovieSubtotalTitleMobile>Subtotal</CartMovieSubtotalTitleMobile>
        <CartMovieSubtotal>R$ 29,99</CartMovieSubtotal>
      </CartMovieColumnMobile>
    </CartMovieProductMobile>
  );
}
