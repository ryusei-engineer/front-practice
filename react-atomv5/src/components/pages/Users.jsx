import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
export const Users = () => {
  const users = [...Array(10).keys()].map(((val) => {
    return {
      id: val,
      name: `foge${val}`,
      image: "https://plus.unsplash.com/premium_photo-1676479610745-fd38d98abb1b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGRvZ3xlbnwwfHwwfHx8MA%3D%3D",
      email: "aaa@aa.com",
      phone: "000-0000-0000",
      company: {
        name: "あああ株式会社",
      },
      website: "aaa.com",
    }
  }));

  return (
    <SContainer>
      <h2>Usersページです</h2>
      <SearchInput />
      <br />
      <SecondaryButton>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
      </SUserArea>
      
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`

const SUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`