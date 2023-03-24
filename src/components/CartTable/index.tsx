import { useEffect, useState } from "react";

import {
  CartTable,
  CartTableHead,
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
  CartMovieProductMobile,
  CartMovieColumnMobile,
  CartMovieImageMobile,
  CartMovieRowMobile,
  CartMovieSubtotalTitleMobile
} from "./styles";

export function CartMoviesTable() {
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
