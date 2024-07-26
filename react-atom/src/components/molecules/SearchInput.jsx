import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/input/Input";

export const SearchInput = () => {
  return (
    <div>
      <Input type="text" />
      <PrimaryButton>検索</PrimaryButton>
    </div>
  );
};