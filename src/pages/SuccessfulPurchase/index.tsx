import { Link } from "react-router-dom";
import { Button } from "../../components/Button";

import {
  Container,
  ContentContainer,
  ContentColumn,
  ContentTitle,
  ContentImage
} from "./styles";

export function SuccessfulPurchase() {
  return (
    <Container>
      <ContentContainer>
        <ContentColumn>
          <ContentTitle>Compra realizada com sucesso!</ContentTitle>
          <ContentImage src="img/successful_purchase.svg" />
          <Link to="/">
            <Button color="primary" size="medium">
              Voltar
            </Button>
          </Link>
        </ContentColumn>
      </ContentContainer>
    </Container>
  );
}
