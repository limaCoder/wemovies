import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
  gap: 8px;

  width: 309.33px;
  height: 305px;
  border-radius: 4px;
`;

export const MovieImage = styled.img`
  width: 147px;
  height: 188px;
`;

export const MovieTitle = styled.h3`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

  color: var(--text-primary);
`;

export const MoviePrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  text-align: center;

  color: var(--text-secondary);
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3.4px;
  margin-right: 12px;
`;

export const CartAddMoreIcon = styled.img`
  width: 13.6px;
  height: 13.6px;
`;

export const MovieQuantity = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;
