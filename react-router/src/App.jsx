import { BrowserRouter, Link, } from "react-router-dom";
import { Home } from "./Home";
import { Router } from "./router/Router";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Link to="/">Home</Link>
        <Link to="/page1">Page1</Link>
        <Link to="/page2">Page2</Link>
        <Link to="/11?name=aa">UrlParameter</Link>
        <Home />
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
