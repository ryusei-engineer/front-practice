import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { css } from "./App.css";
const user = {
  name: "名前a",
  image: "https://plus.unsplash.com/premium_photo-1676479610745-fd38d98abb1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  email: "a23@abc",
  phone: "090-0000-000",
  company: {
    name: "会社名",
  },
  website: "https://unsplash.com/ja/s/%E5%86%99%E7%9C%9F/dog",
}

function App() {
  return (
    <BrowserRouter>
      <HeaderOnly className="App">
      <PrimaryButton>aa</PrimaryButton>
      <PrimaryButton>bb</PrimaryButton>
      <SecondaryButton>sss</SecondaryButton>
      <SearchInput />
      <UserCard user={user}/>
      </HeaderOnly>  
    </BrowserRouter>

  );
}

export default App;
