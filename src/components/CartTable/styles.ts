import styled from "styled-components";

export const CartTable = styled.table`
  padding: 24px;
  width: 900px;
  border-spacing: 0px 0.5rem;
`;

export const CartTableHead = styled.th`
  text-align: left;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;

  color: var(--gray);
`;

export const CartMovieImage = styled.img`
  width: 89px;
  height: 114px;
  margin-top: 21px;
`;

export const CartMovieContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CartMovieTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;

  color: var(--text-secondary);
`;

export const CartMoviePrice = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: var(--text-secondary);
`;

export const CartMovieQuantityActions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 11px;
`;

export const CartMovieDecreaseQuantity = styled.img``;

export const CartMovieQuantityInput = styled.input`
  border: 1px solid #d9d9d9;
  border-radius: 4px;

  width: 62px;
  height: 26px;
  padding-left: 16px;
`;

export const CartMovieIncreaseQuantity = styled.img``;

export const CartMovieSubtotal = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  color: var(--text-secondary);
`;

export const CartMovieTrashIcon = styled.img``;

export const CartMovieProductMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 16px;
`;

export const CartMovieImageMobile = styled.img`
  width: 64px;
  height: 82px;
`;

export const CartMovieSubtotalTitleMobile = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;

  color: var(--gray);
`;

export const CartMovieColumnMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &:nth-of-type(3) {
    align-items: flex-end;
  }
`;

export const CartMovieRowMobile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  margin-bottom: 16px;
`;
