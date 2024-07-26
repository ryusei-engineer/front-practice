import styled from "styled-components";
export const StyledComponents = () => {
  return (
    <Container>
      <p>styledComponents</p>
      <button>button</button>
    </Container>
  );
};

const Container = styled.div`
background-color: green;
`