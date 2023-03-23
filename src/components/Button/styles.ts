import styled from "styled-components";
import { ButtonProps } from "./types";

export const ButtonStyled = styled.a<ButtonProps>`
  background-color: ${(props) =>
    props.color === "primary"
      ? "#009EDD"
      : props.color === "secondary"
      ? "#039B00"
      : "#FFF"};
  color: var(--white);
  transition: 0.6s ease-in;

  display: inline-flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 4px;
  height: 40px;
  width: ${(props) =>
    props.size === "small"
      ? "180xpx"
      : props.size === "medium"
      ? "235.42px"
      : "287.33px"};

  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  font-size: ${(props) => (props.size === "large" ? "12px" : "14px")};
  line-height: ${(props) => (props.size === "large" ? "16px" : "19 px")};

  &:hover {
    background-color: ${(props) =>
      props.color === "primary"
        ? "#0069d9"
        : props.color === "secondary"
        ? "#218838"
        : "#5a6268"};
  }
`;
