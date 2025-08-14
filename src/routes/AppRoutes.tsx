import { Route, Routes } from "react-router";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { NotFound } from "../pages/NotFound";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" index element={<Home />}/>
      <Route path="/products"  element={<Products />}/>
      <Route path="*"  element={<NotFound />}/>
      <Route path="/details/:id"  element={<Details />}/>
    </Routes>
  )
}