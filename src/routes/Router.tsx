import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Cart } from "../pages/Cart";
import { SuccessfulPurchase } from "../pages/Successful Purchase";

import { DefaultLayout } from "../layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route element={<Home />} path="/" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<SuccessfulPurchase />} path="/sucessful-purchase" />
      </Route>
    </Routes>
  );
}
