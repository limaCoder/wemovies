import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 24.5px 10px;
`;

export const MenuContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: flex-wrap;
`;

export const HeaderLogo = styled.img`
  width: 101.94px;
  height: 25px;
`;

export const HeaderCart = styled.div`
  display: flex;
  align-items: center;
  gap: 9.33px;
`;

export const HeaderCartTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CartTitle = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 19px;

  color: var(--white);

  @media (max-width: 375px) {
    display: none;
  }
`;

export const CartItens = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: end;

  color: var(--gray);
`;

export const CartIcon = styled.img`
  width: 29.32px;
  height: 25.31px;
`;
