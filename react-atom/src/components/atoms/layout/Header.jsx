import { Route, Routes } from "react-router-dom"
import { Card } from "../card/Card"
export const Header = ()=> {
  return(
    <header>
      <Routes>
        <Route path="/home" element={<Card />} />
      </Routes>
      a
    </header>
  )
}