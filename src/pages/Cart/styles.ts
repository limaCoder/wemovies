import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 960px;
  min-height: 532.8px;

  background-color: var(--white);
  overflow-x: auto;
`;

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

export const CartTableData = styled.td``;

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

export const ContentColumn = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
`;

export const ContentTitle = styled.p`
  font-weight: 700;
  font-size: 20px;
  line-height: 27px;

  color: var(--text-secondary);
`;

export const ContentImage = styled.img`
  width: 178.63px;
  height: 264px;
`;

export const HorizontalLine = styled.div`
  width: 95%;
  height: 1px;
  background-color: var(--gray);
  margin: 0 auto;
`;

export const CartFinalRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 24px;
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
`;

export const CartTotalTitle = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  text-transform: uppercase;

  color: var(--gray);
`;

export const CartTotalPrice = styled.span`
  font-weight: 700;
  font-size: 24px;
  line-height: 33px;
`;
