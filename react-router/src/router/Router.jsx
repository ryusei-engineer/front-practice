import { Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1DetailA } from "../Page1DetailA";
import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";
export const Router = () => {
  return (
    <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/page1">
          <Route index element={<Page1 />}/>
          <Route path="detaila" element={<Page1DetailA />} />
        </Route>
        <Route path="/page2" element={<Page2 />} />
        <Route path="/:id" element={<UrlParameter />} />
      </Routes>
  )

}