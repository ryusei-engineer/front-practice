import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';
import "./App.css";


const user = {
  name: "hoge",
  image: "https://plus.unsplash.com/premium_photo-1676479610745-fd38d98abb1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
  email: "aaa@aa.com",
  phone: "000-0000-0000",
  company: {
    name: "あああ株式会社",
  },
  website: "aaa.com",
}

function App() {
  return (
    <div className="App">
      <PrimaryButton>aa</PrimaryButton>
      <PrimaryButton>aaa</PrimaryButton>
      <SecondaryButton>ss</SecondaryButton>
      <SearchInput />
      <UserCard user={user} />
    </div>
  );
}

export default App;
