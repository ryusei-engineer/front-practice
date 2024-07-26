import styled from "styled-components";
export const SecondaryButton = (props) => {
  const { children } = props;
  return (
    <SButton>
      { children }
    </SButton>

  );
};

const SButton = styled.button`
background-color: #11999e;
display: block;
margin: 12px auto;
width: 80px; 
`