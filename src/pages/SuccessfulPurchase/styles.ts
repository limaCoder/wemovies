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

  color: var(--text-secondary);
`;

export const ContentImage = styled.img`
  width: 294.96px;
  height: 307px;
`;
