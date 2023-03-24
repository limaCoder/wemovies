import styled from "styled-components";

export const Container = styled.div`
  min-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MoviesListContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;

  padding: 30px 0;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;
