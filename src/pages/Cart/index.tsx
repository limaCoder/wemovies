import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import {
  Container,
  ContentContainer,
  ContentColumn,
  ContentTitle,
  ContentImage
} from "./styles";

export function Cart() {
  return (
    <Container>
      <ContentContainer>
        <ContentColumn>
          <ContentTitle>Parece que não há nada por aqui :(</ContentTitle>
          <ContentImage src="img/fallback_products.svg" />
          <Link to="/sucessful-purchase">
            <Button color="primary" size="medium">
              Voltar
            </Button>
          </Link>
        </ContentColumn>
      </ContentContainer>
    </Container>
  );
}
