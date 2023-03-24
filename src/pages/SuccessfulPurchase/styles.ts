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
    height: 574px;
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
  width: 294.96px;
  height: 307px;
`;
