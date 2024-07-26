import { Routes, Link } from "react-router-dom";
export const Page1 = () => {
  return (
    <div>
      <Link to="/page1/detaila">DetailA</Link>
      <Link to="/page1/detailb">DetailB</Link>
      <h1>Page1ページ</h1>
    </div>
  );
}