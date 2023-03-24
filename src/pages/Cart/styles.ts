import styled from "styled-components";

export const Container = styled.div`
  padding: 0 16px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContentContainer = styled.div`
  width: 960px;
  min-height: 532.8px;
  padding: 40px 64px;

  background-color: var(--white);
  overflow-x: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    width: unset;
  }
`;

export const ContentTableContainer = styled.div`
  width: 960px;

  background-color: var(--white);
  overflow-x: auto;

  @media (max-width: 650px) {
    height: 716px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

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
  text-align: center;

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

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 16px;
  }
`;

export const CartTotal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
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
