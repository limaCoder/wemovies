import { BrowserRouter } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { Router } from "./routes/Router";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Router />
        <GlobalStyle />
        <ToastContainer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
