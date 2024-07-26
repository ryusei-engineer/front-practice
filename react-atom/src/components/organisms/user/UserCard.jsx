import styled from "styled-components"
import { Card } from "../../atoms/card/Card"
import { UserIconWithName } from "../../molecules/user/UserIconWithName";
import { Route, Routes } from "react-router-dom"
export const UserCard = (props) => {
  const { user } = props;
  return (
    <Card>
      <UserIconWithName image={user.image} name={user.name} />
      <SDl>
        <dt>mail</dt>
        <dd>{user.email}</dd>
        <dt>電話番号</dt>
        <dd>{user.phone}</dd>
        <dt>会社名</dt>
        <dd>{user.company.name}</dd>
        <dt>webサイトアドレス</dt>
        <dd>{user.website}</dd>
      </SDl>
    </Card>
  );
};

const SDl = styled.dl`
text-align: left;
dd {
overflow-wrap: break-word;
}
`