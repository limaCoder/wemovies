import { ButtonStyled } from "./styles";
import { ButtonProps } from "./types";

export function Button({
  size = "small",
  color = "primary",
  icon,
  children,
  ...rest
}: ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <ButtonStyled size={size} color={color} icon={icon} {...rest}>
      {icon ? icon : null}
      {children}
    </ButtonStyled>
  );
}
