import { useEffect, useState } from "react";

import { CartTableDesktop } from "./CartTableDesktop";
import { CartTableMobile } from "./CartTableMobile";

export function CartMoviesTable() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isSmallScreen = screenWidth <= 650;

  if (isSmallScreen) {
    return <CartTableMobile />;
  }

  return <CartTableDesktop />;
}
