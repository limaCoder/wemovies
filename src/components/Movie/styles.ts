import styled from "styled-components";

export const Container = styled.div`
  background: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 11px;
  gap: 8px;

  width: 287.33px;
  height: 285px;
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
`;

export const MoviePrice = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;

  text-align: center;
`;
